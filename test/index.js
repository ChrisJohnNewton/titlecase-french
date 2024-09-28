import { should } from "chai";
import {
  keepCapitalizedSpecials,
  upperCaseReplacements,
  withNewWords,
  withoutNewWords,
  wordReplacementsContractedArticles,
  wordReplacementsCoordinatingConjunctions,
  wordReplacementsDefiniteArticles,
  wordReplacementsDemonstrativeAdjectives,
  wordReplacementsExclamativeAdjectives,
  wordReplacementsIndefiniteArticles,
  wordReplacementsOthers,
  wordReplacementsPartitiveArticles,
  wordReplacementsPersonalPronouns,
  wordReplacementsPossessiveAdjectives,
  wordReplacementsPrepositions,
  wordReplacementsRelativePronouns,
  wordReplacementsSpecialChars,
  wordReplacementsSubordinatingConjunctions,
  wordReplacementswithQuotes,
} from "./examples.js";
import convert, { addLowerCaseWords, removeLowerCaseWords, keepCapitalizedSpecials as _keepCapitalizedSpecials } from "../index.js";

// Activate chai's `should` style assertions
should();

describe("titleCase-french", function () {
  it("should replace the definite articles (le,la,les,l')", function () {
    wordReplacementsDefiniteArticles.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the indefinite articles (un,une,des)", function () {
    wordReplacementsIndefiniteArticles.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the partitive articles (du,de la,de l',des)", function () {
    wordReplacementsPartitiveArticles.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the contracted articles (au,aux,du,des)", function () {
    wordReplacementsContractedArticles.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the demonstrative adjectives (ce,cet,cette,ces)", function () {
    wordReplacementsDemonstrativeAdjectives.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the exclamative adjectives (quel,quels,quelle,quelles)", function () {
    wordReplacementsExclamativeAdjectives.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the possessive adjectives (mon,ton,son,notre,votre,leur,ma,ta,sa,mes,tes,ses,nos,vos,leurs)", function () {
    wordReplacementsPossessiveAdjectives.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the coordinating conjunctions (mais,ou,et,donc,or,ni,car,voire)", function () {
    wordReplacementsCoordinatingConjunctions.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the subordinating conjunctions (que,quand,comme,si,lorsque,puisque,quoique)", function () {
    wordReplacementsSubordinatingConjunctions.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the prepositions (à,chez,dans,entre,jusque,hors,par,pour,sans,vers,sur,pas,parmi,avec,sous,en,(and others))", function () {
    wordReplacementsPrepositions.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the personal pronouns (je,tu,il,elle,nous,vous,ils,elles,me,te,se,y)", function () {
    wordReplacementsPersonalPronouns.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the relative pronouns (qui,que,quoi,dont,où)", function () {
    wordReplacementsRelativePronouns.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the other words (ne)", function () {
    wordReplacementsOthers.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace wih quotes (c',d',j',m',n',s','s,t')", function () {
    wordReplacementswithQuotes.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the special chars (-,-t-,A.C.R.O.N.Y.M.S)", function () {
    wordReplacementsSpecialChars.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it("should replace the uppercase accent (É,È,À,Ç)", function () {
    upperCaseReplacements.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the added words "tutu,tata,toto"', function () {
    // add the words a first time with specific inconsistent writing
    addLowerCaseWords("tutu, toto , tata ");
    withNewWords.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });

    // add the words a second time
    addLowerCaseWords("tutu,toto,tata");
    withNewWords.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it('should not replace the removed words "tutu,tata,toto"', function () {
    // remove the words a first time with specific inconsistent writing
    removeLowerCaseWords("tutu, toto , tata ");
    withoutNewWords.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });

    // remove the words a second time
    removeLowerCaseWords("tutu,toto,tata");
    withoutNewWords.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });

  it('should not replace the removed capitalized specials "À,Ç,É"', function () {
    // remove the words a first time with specific inconsistent writing
    _keepCapitalizedSpecials(" À ,Ç , É ");
    keepCapitalizedSpecials.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });

    // remove the words a second time
    _keepCapitalizedSpecials("À,Ç,É");
    keepCapitalizedSpecials.forEach(function (example) {
      convert(example.input).should.equal(example.output);
    });
  });
});
