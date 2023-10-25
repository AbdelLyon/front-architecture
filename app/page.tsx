import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";

const Home = () => (
  <Card className="max-w-5xl mx-auto mt-6 p-4 rounded-lg shadow-lg">
    <CardHeader>
      <h1 className="text-3xl font-bold mb-4">
        Architecture Front-End Maintenable, Scalable et Testable en Cours de
        Réalisation
      </h1>
    </CardHeader>
    <CardContent>
      <p className="mb-4">
        Chers collègues développeurs, je suis ravi de vous présenter notre
        nouvelle architecture front-end en cours de réalisation. Conçue avec un
        soin particulier, elle est pensée pour garantir sa maintenabilité, sa
        scalabilité et sa testabilité. Notre équipe s'investit activement pour
        créer une base solide qui évoluera harmonieusement avec les besoins
        futurs de notre application.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Principales caractéristiques :
      </h2>
      <ul className="list-decimal pl-6 mb-4">
        <li className="mb-2">
          <strong>Maintenabilité :</strong> Chaque composant est développé en
          suivant les meilleures pratiques de l'industrie, garantissant un code
          propre et facilement compréhensible.
        </li>
        <li className="mb-2">
          <strong>Scalabilité :</strong> Notre architecture est construite sur
          des fondations solides qui permettent à l'application de croître sans
          compromettre les performances. Nous avons mis en place des mécanismes
          d'extensibilité qui nous permettront d'ajouter de nouvelles
          fonctionnalités sans perturber le fonctionnement existant.
        </li>
        <li className="mb-2">
          <strong>Testabilité :</strong> Chaque élément de l'architecture est
          testable de manière isolée, simplifiant ainsi la détection et la
          correction des erreurs. Nous envisageons également d'intégrer des
          suites complètes de tests d'intégration et éventuellement des tests
          End-to-End pour assurer la stabilité de l'ensemble de l'application.
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <p>
        Je compte sur votre expertise et votre collaboration active pour
        participer à l'amélioration continue de ce projet. N'hésitez pas à
        explorer notre{" "}
        <Link
          href="https://github.com/AbdelLyon/front-architecture"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          repository GitHub
        </Link>
        pour obtenir un aperçu détaillé de notre architecture. Vos suggestions
        et contributions sont essentielles pour faire de ce projet une référence
        en termes de qualité et d'efficacité.
      </p>
    </CardFooter>
  </Card>
);

export default Home;
