import Sidebar from "../../components/shared/Sidebar";

const Docs = () => {
  return (
    <div className="flex h-screen mt-10 ml-2 w-3/4">
      <Sidebar />
      <div className="w-full px-8">
        <h2 id="section-1" className="font-bold mb-4">
          Section 1
        </h2>
        <p className="mb-4">Contenu de la section 1 de la documentation.</p>
        <img
          src={
            "https://miro.medium.com/v2/resize:fit:1400/1*YkyCsmw3rGNQ6NYH7YpAPQ.png"
          }
          alt="img"
          width={700}
          height={600}
        />

        <h2 id="section-2" className="font-bold my-4">
          Section 2
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit autem a, aspernatur totam veniam perspiciatis quis
          explicabo vero saepe similique corrupti illo beatae dolor, sunt
          consequatur exercitationem placeat praesentium Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Reprehenderit autem a, aspernatur
          totam veniam perspiciatis quis explicabo vero saepe similique corrupti
          illo beatae dolor, sunt consequatur exercitationem placeat praesentium
          iure.
        </p>

        <h2 id="section-3" className="font-bold mb-4">
          Section 3
        </h2>
        <p className="mb-4">Contenu de la section 1 de la documentation.</p>
        <img
          src={
            "https://miro.medium.com/v2/resize:fit:1400/1*YkyCsmw3rGNQ6NYH7YpAPQ.png"
          }
          alt="img"
          width={700}
          height={600}
        />
      </div>
    </div>
  );
};

export default Docs;
