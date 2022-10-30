import { InformationCard } from "../../components/informationCard";
import { Layout } from "../../components/layout";

export const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center my-20">
      <div className="flex px-20">
        <InformationCard>
          <div>Title</div>
          <div>Links</div>
          <div>Github</div>
          <div>Linkedin</div>
        </InformationCard>
      </div>
      <div className="flex px-20 justify-end">
        <InformationCard>
          <div>Title</div>
          <div>Links</div>
          <div>Github</div>
          <div>Linkedin</div>
        </InformationCard>
      </div>
      <div className="flex px-20">
        <InformationCard>
          <div>Title</div>
          <div>Links</div>
          <div>Github</div>
          <div>Linkedin</div>
        </InformationCard>
      </div>
      </div>
    </Layout>
  );
};
