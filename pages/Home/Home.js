import React from "react";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import MainContent from "../../components/Home/MainContent";
import FilterBar from "../../components/Home/FilterBar";
export default function Home() {
  // to filter item on the basis of price and item category
  const [price, setPrice] = useState(5000);
  const [category, setCategory] = useState("none");

  // for searched item
  const [search, setSearch] = useState("");
    // to whether show/hide the filter bar on homepage
    const [applyFilter,setApplyFilter]=useState(false);

  return (
    <>
      <div className={styles.aside}>
         {/* show/hide on button click */}
         <button className={styles.filterbtn} onClick={() => setApplyFilter(!applyFilter)}>
            {applyFilter?"Cancel":"Apply Filter"}
          </button>
      {applyFilter && <FilterBar price={price}
                                 setPrice={setPrice}
                                 setCategory={setCategory} />}
      </div>
      <div className={styles.mainPage}>
        <div className={styles.header}>
          {/* search bar */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.mainContainer}>
          <MainContent
            search={search}
            price={price}
            category={category}
            applyFilter={applyFilter} 
          />
        </div>
      </div>
    </>
  );
}
