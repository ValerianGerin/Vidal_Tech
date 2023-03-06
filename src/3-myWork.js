/**
 * Dépendences non inclues, aucun résultat n'est attendu à l'exécution de ce fichier
 * L'exercice a pour objectif de déterminer votre capacité à reprendre du code existant :
 * Il faut revoir le fond, la forme et les erreurs potentielles
 * Vous devez modifier le code et mettre des commentaires si besoin
 */

const axios = require('axios');

const REFERENT = 'REFERENT';
const generic = 'GENERIC';

class Product {
  Product(pId) {
    this.id = pId;
    this.donnee = {};
  }

  loadData() {
    let id = this.id;
    return new Promise(function (pResolve, pReject) {
      axios
        .get('https://api.vidal.fr/api/product/' + id)
        .then(function (pResult) {
          this.donnee = pResult.data;
          pResolve();
        }, pReject);
    });
  }

  getNom() {
    return this.data.name;
  }

  isSupprime() {
    return this.data.marketStatus === 'DELETED';
  }

  isReferent() {
    return this.data.type === REFERENT;
  }

  getMolecules() {
    if (this.donnee && this.donnee.molecules) {
      return this.donnee.molecules;
    } else {
      return [];
    }
  }

  getClassification() {
    return this.donnee.classification || [];
  }
}

let doliprane = new Product(19649);

doliprane.loadData().then(
  function () {
    console.log(doliprane.getNom());

    this.doliprane.getMolecules().foreach(function (pMolecule) {
      console.log(pMolecule.name);
    });

    for (i = 0; i <= doliprane.getClassification().length; i++) {
      var classif = doliprane.getClassification()[i];
      console.log(classif.name);
    }
  },
  function (e) {
    console.error(
      'Impossible de charger les informations pour le produit demandé',
      e
    );
  }
);

console.log(doliprane.isSupprime());
