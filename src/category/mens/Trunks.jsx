import React, { useState, useEffect } from "react";
import { Product, H1, Grid } from "./mens.styled";
import { TB } from "../api/data";
import MentsItem from "./MentsItem";
import Productcatagory from "./navbar/Productcatagory";
import Nodata from "./navbar/Nodata";

const Trunks = () => {
  const [elem, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = TB.filter((elm) => elm.price < data);
    console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(TB);
  }, []);
  return (
    <Grid>
      <div>
        <Productcatagory filterdata={filterdata} />
      </div>
      <div>
        <H1>Trunks&Briefs</H1>
        {elem.length ? (
          <Product style={{}}>
            {elem.map((elem, ind) => (
              <MentsItem elem={elem} key={ind} />
            ))}
          </Product>
        ) : (
          <Nodata />
        )}
      </div>
    </Grid>
  );
};

export default Trunks;
