import { CardStatusShow, CardStatusShowDetail } from "../components/Card";
import Layout from "../components/Layout";

const DetailPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-auto items-center pt-5">
        <div className="w-auto h-auto">
          <CardStatusShow />
        </div>
        <div className="w-auto h-auto pt-5">
          <CardStatusShowDetail />
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
