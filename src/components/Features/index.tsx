import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Somos especialistas en Mantenimiento a equipos de cocina, refrigeración, panadería y lavanderíaIndustrial."
            paragraph="Nuestro compromiso es lograr siempre la satisfacción de nuestros clientes, por lo cual es importante para nosotros quecada trabajo que se realice este basado sobre nuestros valores corporativos que son honestidad, pasión, comunicación ylealtad; para ello contamos con un grupo de colaboradores con alto conocimiento y sentido de pertenencia."
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
