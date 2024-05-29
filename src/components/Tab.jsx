import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "./Card";
import img from "../assets/img2.png";
import img3 from "../assets/img3.png";

import { cardData, cardDataRoman } from "../Data/DataCrd";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabComp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="#042448"
            textColor="#fff"
            sx={{
              backgroundColor: "#3A526D",
              color: "white",
              borderRadius: "10px",
              "& .MuiTabs-indicator": {
                backgroundColor: "#E1A914",
              },
            }}
          >
            <Tab label="All Genre" {...a11yProps(0)} />
            <Tab label="Romance" {...a11yProps(1)} />
            <Tab label="Adventure" {...a11yProps(2)} />
            <Tab label="Action" {...a11yProps(3)} />
            <Tab label="Thriller" {...a11yProps(4)} />
            <Tab label="Historical fiction" {...a11yProps(5)} />
            <Tab label="Biographies" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {cardData.map((data, index) => (
              <div key={index}>
                <Card
                  imageSrc={img}
                  title={data.title}
                  description={data.description}
                  iconTxt={data.iconTxt}
                  catrogyTxt={data.catrogyTxt}
                  buttonText={data.buttonText}
                />
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {cardDataRoman.map((data, index) => (
              <div key={index}>
                <Card
                  imageSrc={img3}
                  title={data.title}
                  description={data.description}
                  iconTxt={data.iconTxt}
                  catrogyTxt={data.catrogyTxt}
                  buttonText={data.buttonText}
                />
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {cardData.map((data, index) => (
              <div key={index}>
                <Card
                  imageSrc={img}
                  title={data.title}
                  description={data.description}
                  iconTxt={data.iconTxt}
                  catrogyTxt={data.catrogyTxt}
                  buttonText={data.buttonText}
                />
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {cardDataRoman.map((data, index) => (
              <div key={index}>
                <Card
                  imageSrc={img3}
                  title={data.title}
                  description={data.description}
                  iconTxt={data.iconTxt}
                  catrogyTxt={data.catrogyTxt}
                  buttonText={data.buttonText}
                />
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {cardData.map((data, index) => (
              <div key={index}>
                <Card
                  imageSrc={img}
                  title={data.title}
                  description={data.description}
                  iconTxt={data.iconTxt}
                  catrogyTxt={data.catrogyTxt}
                  buttonText={data.buttonText}
                />
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {cardDataRoman.map((data, index) => (
              <div key={index}>
                <Card
                  imageSrc={img3}
                  title={data.title}
                  description={data.description}
                  iconTxt={data.iconTxt}
                  catrogyTxt={data.catrogyTxt}
                  buttonText={data.buttonText}
                />
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {cardData.map((data, index) => (
              <div key={index}>
                <Card
                  imageSrc={img}
                  title={data.title}
                  description={data.description}
                  iconTxt={data.iconTxt}
                  catrogyTxt={data.catrogyTxt}
                  buttonText={data.buttonText}
                />
              </div>
            ))}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
};
export default TabComp;
