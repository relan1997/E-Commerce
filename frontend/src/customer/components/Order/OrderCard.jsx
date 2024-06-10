import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    <div className="p-5 shadow-md shadow-black hover:shadow-2xl">
      <Grid conatiner spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt=""
            />
            {/* to understand the working of the object-cover and object-top property pls refer to https://chatgpt.com/c/f9c18ee8-cf9e-4127-998d-d8ec8e505239 */}

            <div className="ml-5 space-y-2">
              <p className=" ">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size:M </p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && (<div><p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span>Delivered on March 03</span>
            </p>
            <p className="text-xs"></p>
            </div>
            
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
