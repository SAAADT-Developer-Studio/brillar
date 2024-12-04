import { renderDom, renderElement } from "./brillar";

function Wrapper({ children }) {
  return <div style="padding: 20px;">{children}</div>;
}

const Component = ({ style }) => {
  return (
    <div style={style}>
      <input type="text" />
      <h1 style="color: red;">I wanna die</h1>
      <Wrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          aperiam ad, necessitatibus dolore est laboriosam accusamus ducimus
          nobis modi perspiciatis vel provident reprehenderit cum aliquid
          quibusdam sapiente ipsa, totam odio.
        </p>
      </Wrapper>
    </div>
  );
};

const App = () => {
  return <Component />;
};

renderDom(<App />, document.getElementById("root"));
