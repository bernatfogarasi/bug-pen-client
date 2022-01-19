import styled from "styled-components";

const scale = {
  1: {
    style: { color: "", backgroundColor: "#FFFCC1" },
    text: "Very low",
  },
  2: { style: { color: "", backgroundColor: "#FFE3AF" }, text: "Low" },
  3: { style: { color: "", backgroundColor: "#FFCA93" }, text: "Medium" },
  4: { style: { color: "", backgroundColor: "#FFA178" }, text: "High" },
  5: {
    style: { color: "", backgroundColor: "#FF7169" },
    text: "Very high",
  },
};

const Wrapper = styled.div`
  font-size: 10px;
  border-radius: 10px;
  width: fit-content;
`;

const Scale = ({ className, index, ...props }) => {
  const value = scale[index];
  return (
    <Wrapper
      className={className}
      // style={value.style}
      {...props}
    >
      {value.text}
    </Wrapper>
  );
};

export default Scale;
