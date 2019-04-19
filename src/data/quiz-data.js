import React from "react";

const QUESTION_DATA = [
  {
    question: <span>En quelle année le premier Easter Egg a vu le jour ?</span>,
    answers: [
      <span>En l'an 0 avant C.C. (Christ Cosmique)</span>,
      <span>En 1989 dans Indiana Jones et la Dernière Croisade</span>,
      <span>En 1979 dans le jeu Adventure</span>,
      <span>En 1981 dans le jeu Donkey Kong</span>
    ],
    correct: 2
  },
  {
    question: <span>La ville d'Oeufs Frais existe-t-elle ?</span>,
    answers: [<span>Vrai</span>, <span>Faux</span>],
    correct: 1
  },
  {
    question: (
      <span>
        Selon la légende, si l'Oeuf Cosmique reste enterré pendant cent ans que
        se passe t-il ?
      </span>
    ),
    answers: [
      <span>
        Sylvain Pierre Durif, le Grand Monarque annoncé par les prophéties de
        Nostradamus et Saint-Malachie, dernier roi de France, dernier Pape
        Pierre officiellement auto-proclamé depuis le 6 juin 2013 ( 666 ) devant
        le Vatican et avatar du Christ relié aux énergies de l’Homme Vert alias
        Merlin l’enchanteur et aux énergies Elohims sous son nom d’Ab Ar Ra Am,
        prendra le pouvoir.
      </span>,
      <span>Tu dis ?</span>,
      <span>
        L'oeuf cosmique n'est que la représentation de ton imagination.
        Redescends stp!
      </span>,
      <span>Non</span>
    ],
    correct: 0
  },
  {
    question: <span>L'oeuf ou la poule ?</span>,
    answers: [
      <span>L'oeuf</span>,
      <span>La poule</span>,
      <span>Gourou a dit un jour "L'oeuf ou la poule ? CodeCodeCodec"</span>
    ],
    correct: 2
  },
  {
    question: (
      <span>Que se passe-t-il si tu tapes "do a barrel roll" sur Google ?</span>
    ),
    answers: [
      <span>La page tourne sur elle-même</span>,
      <span>La page affiche les résultats "do a barrel roll"</span>,
      <span>
        La page tourne sur elle-même sans s'arrêter et nous démontre que la
        terre est plate
      </span>,
      <span>Le christ cosmique apparaît</span>
    ],
    correct: 0
  },
  {
    question: (
      <span>
        Sur AlloCiné, que se passe-t-il lorsqu'on s'inscrit et que l'on tape une
        date de naissance future ?
      </span>
    ),
    answers: [
      <span>De retour du futur Marty McFly ?</span>,
      <span>Date de naissance invalide</span>,
      <span>Salut bébé</span>
    ],
    correct: 0
  },
  {
    question: <span>La ville d'Egg existe. Où se situe-t-elle ?</span>,
    answers: [
      <span>En France</span>,
      <span>En Suisse</span>,
      <span>A Minas Morgul</span>,
      <span>Dans ton propre subsconscient</span>
    ],
    correct: 1
  },
  {
    question: <span>Est-ce que Gandalf est connecté ?</span>,
    answers: [
      <span>This webpage is not available</span>,
      <span>Select Network</span>,
      <span>Non ça n'existait pas à cette époque</span>
    ],
    correct: 0
  },
  {
    question: (
      <span>
        Sur Android, dès que 100 onglets sont ouverts que se passe-t-il ?
      </span>
    ),
    answers: [
      <span>Le nombre d'onglets est remplacé par :D</span>,
      <span>Le nombre d'onglets est numéroté</span>,
      <span>Les 100 onglets disparaissent</span>
    ],
    correct: 0
  },
  {
    question: (
      <span>
        Sur Chrome, dans la barre de recherche Google, que se passe-t-il si on
        tape "zerg rush"
      </span>
    ),
    answers: [
      <span>La page se fait détruire par des "O"</span>,
      <span>
        Un zerg apparaît et enlève les mots du résultat de la recherche
      </span>,
      <span>Jacky Chan & Christ Tucker apparaissent en gif</span>
    ],
    correct: 0
  }
];

export default QUESTION_DATA;
