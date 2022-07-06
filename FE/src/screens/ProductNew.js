import { useState, useEffect } from "react";
import { categories } from "../utils/categories";
import "../styles/NewEdit.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../actions/productActions";

const ProductNew = ({ location, history }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isCheck, setIsCheck] = useState(
    new Array(categories.length).fill(false)
  );
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();

  const disable = Boolean(
    name !== "" &&
      price !== "" &&
      description !== "" &&
      isCheck.find((i) => i === true) === true
  )
    ? false
    : true;

  const submitHandler = (e) => {
    dispatch(addProduct(name, price, description, category.toString()));
    if (disable) {
      alert("Missing params");
    } else {
      history.push("/");
    }
    e.preventDefault();
  };

  useEffect(() => {}, [submitHandler]);

  const handleOnChange = (pos) => {
    const updatedChecked = isCheck.map((item, index) =>
      index === pos ? !item : item
    );
    setIsCheck(updatedChecked);
  };

  return (
    <>
      <div className="container">
        <form className="form-container">
          <div className="left-content">
            <img src="data:image/jpeg;base64,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" />
            <input className="btn-upload" type="button" value="Upload" />
          </div>
          <div className="right-content">
            <div className="top-right-content">
              {" "}
              <label>
                Name:{" "}
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label>
                Price:{" "}
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <label>
                Description:
                <br />
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
            <div className="bottom-right-content">
              <label className="category-content">
                Categories:
                <div className="grid-container">
                  {categories.map((item, index) => {
                    return (
                      <div className="category-list" key={index}>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={item}
                          value={item}
                          checked={isCheck[index]}
                          onChange={() => handleOnChange(index)}
                          onClick={() => {
                            if (isCheck[index] === false)
                              setCategory((state) => [...state, item]);
                            else if (isCheck[index] === true)
                              setCategory((state) =>
                                state.filter((i) => i !== item)
                              );
                          }}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>
                          {item}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </label>
              <input
                className="btn-submit"
                type="submit"
                value="Submit"
                onClick={(e) => submitHandler(e)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ProductNew;
