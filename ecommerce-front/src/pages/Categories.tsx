import useCategories from "@hooks/useCategories";
import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Categories = () => {
  const { loading, error, records } = useCategories();
  return (
    <Container>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category">
        <GridList
          emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
