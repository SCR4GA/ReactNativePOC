import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const locationcontext = useContext(LocationContext);
  console.log(locationcontext);
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setsearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setsearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
