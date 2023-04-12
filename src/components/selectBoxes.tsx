import { ChangeEvent, Component } from "react";
import styled from "styled-components";

class SelectBoxes extends Component<{
  onChange: (event: string) => void;
}> {
  onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(target.value);
  };

  render() {
    const categorySelect = [
      "전체",
      "한식",
      "중식",
      "일식",
      "양식",
      "아시안",
      "기타",
    ];
    const sortingSelect = ["이름순", "거리순"];

    return (
      <SelectBoxContainer>
        <SelectBox
          name="category"
          id="category-filter"
          onChange={this.onChange}
        >
          {categorySelect.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </SelectBox>

        <SelectBox name="sorting" id="sorting-filter" onChange={this.onChange}>
          {sortingSelect.map((select, index) => (
            <option key={index}>{select}</option>
          ))}
        </SelectBox>
      </SelectBoxContainer>
    );
  }
}

const SelectBoxContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 32px 16px 8px;
`;

const SelectBox = styled.select`
  width: 125px;
  height: 44px;
  padding: 10px 14px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: #ffffff;
`;

export default SelectBoxes;
