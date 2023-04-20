import React, { useState, useEffect } from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";
import { useRouter } from "next/router";
import { useStateContext } from "@/context/stateContext";

const Product = ({
  product: { image, name, slug, price, oldPrice, _id },
  product,
}: any) => {
  const { decQty, incQty, qty, onAdd, setShowCart, cartItems }: any =
    useStateContext();
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check if we're running on the client
    if (typeof window !== "undefined") {
      // Update the state with the window width
      setWindowWidth(window.innerWidth);

      // Set up an event listener to update the state when the window is resized
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component is unmounted
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="product-card">
      <p
        className="product-name"
        style={{ paddingBottom: "4px", textAlign: "center" }}
      >
        {name}
      </p>
      <Link href={`/clothes/${slug?.current}`}>
        <img
          src={urlFor(image && image[0]).url()}
          alt="product_image"
          width={250}
          height={250}
          className={`product-image`}
          style={{
            width:
              router.pathname === "/all-clothes" && windowWidth < 557
                ? "160px"
                : "",
            height:
              router.pathname === "/all-clothes" && windowWidth < 557
                ? "160px"
                : "",
          }}
        />
      </Link>
      <div style={{ padding: "0px 10px" }}>
        <p
          className="product-price"
          style={{
            color: "#f02d34",
            // justifyContent: !oldPrice ? "center" : "",
            textAlign: !oldPrice ? "center" : "left",
          }}
          // style={{ textAlign: oldPrice && "right" }}
        >
          {price} ₾
        </p>
        {oldPrice && (
          <p
            className="product-price"
            style={{
              textDecoration: "line-through",
              color: "hsl(0, 0%, 63%)",
              textAlign: "right",
              marginTop: "-20px",
            }}
          >
            {oldPrice} ₾
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: oldPrice && "1px",
        }}
      >
        <Link href={`/clothes/${slug?.current}`}>
          <button
            className="btn-primary"
            style={{ marginTop: "10px", marginRight: "5px" }}
          >
            დეტალურად
          </button>
        </Link>
        {/* {cartItems.find(
          (productInCart: any) => product._id === productInCart._id
        )} */}
        {/* <button
          onClick={() => onAdd(product, qty)}
          className="btn-secondary"
          style={{ marginTop: "10px" }}
        >
          დამატება
        </button> */}
      </div>
    </div>
  );
};

export default Product;
