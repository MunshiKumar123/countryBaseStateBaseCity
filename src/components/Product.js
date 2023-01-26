import React, { useState } from "react";
import CountryList from "./CountryList.json";
const Product = () => {
  // state find
  const [countryId, setCountryId] = useState();
  const handleCangeEvent = (evt) => {
    const rcds = evt.target.value;
    setCountryId(rcds);
  };
  const findState = CountryList.find((item) => item.country_id === countryId);
  // city find
  const [cityId, setCityId] = useState();
  const handleChangeCity = (evt) => {
    const rcds = evt.target.value;
    setCityId(rcds);
  };
  const finddCity = findState?.states.find((item) => item.state_id === cityId);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row  mt-5">
              <div className="col-4">
                {" "}
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    onChange={(e) => handleCangeEvent(e)}
                  >
                    <option selected>--- choose country ---</option>
                    {CountryList &&
                      CountryList.length > 0 &&
                      CountryList?.map((item) => (
                        <React.Fragment key={item.country_id}>
                          <option value={item.country_id}>
                            {item?.country_name}
                          </option>
                        </React.Fragment>
                      ))}
                  </select>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    onChange={(e) => {
                      handleChangeCity(e);
                    }}
                  >
                    <option selected>--Choose state--</option>
                    {findState?.states?.map((item) => (
                      <React.Fragment key={item.state_id}>
                        <option value={item.state_id}>{item.state_name}</option>
                      </React.Fragment>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-4">
                {" "}
                <div className="input-group mb-3">
                  <select className="form-select">
                    <option selected>--Choose city--</option>
                    {finddCity?.city?.map((item) => (
                      <React.Fragment key={item.city_id}>
                        <option value={item.city_id}>{item.city_name}</option>
                      </React.Fragment>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
