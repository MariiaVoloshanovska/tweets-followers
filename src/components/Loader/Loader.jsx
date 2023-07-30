import { Comment } from "react-loader-spinner";
import { LoaderWrapper } from "components/Loader/Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Comment
  visible={true}
  height="90"
  width="90"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#471ca9"
/>
    </LoaderWrapper>
  );
};