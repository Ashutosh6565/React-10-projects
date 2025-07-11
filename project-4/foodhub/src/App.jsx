import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "../components/searchresult/SearchResult";

export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setfilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();
        setdata(json);
        setfilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fatch data");
      }
    };
    fetchFoodData();
  }, []);

  const serachFood = (e) => {
    const serachValue = e.target.value;
    if (serachValue === "") {
      setfilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(serachValue.toLowerCase())
    );
    setfilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setfilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setfilteredData(filter);
    setSelectedBtn(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input onChange={serachFood} type="text" placeholder="Search..." />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => filterFood("all")}>ALL</Button>
          <Button onClick={() => filterFood("Breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("Lunch")}>Lunch</Button>
          <Button>Dinner</Button>
          <Button>Dessert</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={filterData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px;
      color: white;
      height: 40px;
       &::placeholder {
      color: white;
    }
    }
  }
  @media (0 < width < 600px) {
    flex-direction: column;
    height: 60px;
   
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  background: #ff4343;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 8px 16px;
`;
