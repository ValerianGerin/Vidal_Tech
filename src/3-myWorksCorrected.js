//AXIOS DEFAULT CONFIG (in a seprate folder ./config/api/)
const axios = require('axios');
const Axios = axios.create({
  baseURL: 'https://api.vidal.fr/api/',
});

/**
 * DATA STRUCTURE EXPECTED
 */

// const DATA = {
//   name: STRING,
//   molecules: ARRAY,
//   classification: ARRAY,
//   marketStatus: STRING,
//   type: STRING,
// };

//CUSTOM ENUM (in separate folder ./enums)
const TYPE = {
  REFERENT: 'REFERENT',
};

const MARKED_STATUS = {
  DELETED: 'DELETED',
};

class Product {
  donnee = {};

  constructor(pId) {
    this.pId = pId;
  }

  //REQUEST METHOD
  async loadData() {
    try {
      const { data } = await Axios.get(`products/${this.pId}`);
      this.donnee = data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getName() {
    return this.donnee.name;
  }

  getMolecules() {
    return this.donnee.molecules ? this.donnee.molecules : [];
  }

  getClassifications() {
    return this.donnee.classification ? this.donnee?.classification : [];
  }

  isDeleted() {
    return this.donnee.marketStatus === MARKED_STATUS.DELETED;
  }

  isReferent() {
    return this.donnee.type === TYPE.REFERENT;
  }
}

//NEW INSTANCE
const doliprane = new Product(19649);

doliprane.loadData().then(
  () => {
    console.log(doliprane.getName());

    //DISPLAY EACH MOLECULES
    doliprane.getMolecules().forEach((pMolecule) => {
      console.log(pMolecule.name);
    });

    //DISPLAY EACH CLASSIFICATION
    doliprane.getClassifications().forEach((pClassification) => {
      console.log(pClassification.name);
    });

    //CHECK ITEM MARKET STATUS
    console.log(doliprane.isDeleted());
  },
  (error) => {
    console.error(
      'Impossible de charger les informations pour le produit demandé',
      error
    );
  }
);
