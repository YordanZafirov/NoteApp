import {
  NotFoundLink,
  NotFoundMessage,
  NotFoundPage,
  NotFoundTitle,
} from "./NotFound";

const NotFound = () => {
  return (
    <NotFoundPage>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Page Not Found</NotFoundMessage>
      <NotFoundLink to="/">Go to the main page</NotFoundLink>
    </NotFoundPage>
  );
};

export default NotFound;
