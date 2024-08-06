import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Especialistas en mantenimiento a equipos de cocina, refrigeración, panadería y lavandería industrial"
            paragraph="Somos una compañía joven y comprometida con el desarrollo del país; constituida por un grupo de profesionales; con la finalidad de ofrecer soluciones integrales en cuanto a asesorías, venta de equipos, intalaciones y mantenimiento, a lo relacionado con equipos de cocina, refrigeración, panadería y lavandería industrial."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
