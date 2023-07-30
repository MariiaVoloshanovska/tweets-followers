import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { CardListWrapper, LinkBack } from "components/CardList/CardList.styled";
import { Card } from "components/Card/Card";
import { Filter } from "components/Filter/Filter";
import { getFilteredUsers } from "components/services/filter-function";

export const CardList = ({ usersSet }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredUsersSet, setFilteredUsersSet] = useState(usersSet);

  useEffect(() => {
    const filteredUsers = getFilteredUsers(filterValue, usersSet);
    setFilteredUsersSet(filteredUsers);
  }, [filterValue, usersSet]);

  const onChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <LinkBack to={"/home"}>
        {"\u2039"} &#160; Go Back
      </LinkBack>
      <Filter onChangeFilter={onChangeFilter} />
      <CardListWrapper>
        {filteredUsersSet.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </>
  );
};

CardList.propTypes = {
  usersSet: PropTypes.arrayOf(PropTypes.object),
};
