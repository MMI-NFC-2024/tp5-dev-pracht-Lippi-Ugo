// lancer en tapant dans la console :
// node --experimental-strip-types tests.ts

import olympians from "./olympians.json" with { type: 'json' };

//** Compléter les en écrivant les parties :  */
/* TODO */
/* Désactiver COPILOT pour que vous fassiez l'effort de lire */

console.log("=== EXEMPLES DES MÉTHODES ARRAY AVEC LES DONNÉES OLYMPIANS ===\n");
console.log(`Nombre total d'athlètes: ${olympians.length}\n`);

// ===== MÉTHODES D'ACCÈS AUX ÉLÉMENTS =====

console.log("--- MÉTHODES D'ACCÈS AUX ÉLÉMENTS ---");

console.log("• at() - Premier athlète:", olympians.at(0)?.name);
console.log("• at() - Dernier athlète:", olympians.at(-1)?.name);
console.log();

console.log("• slice() - Les 3 premiers athlètes:");
console.log(olympians.slice(0, 3).map(o => `${o.name} (${o.nationality})`));
console.log();

// ===== MÉTHODES DE RECHERCHE ET VÉRIFICATION =====

console.log("--- MÉTHODES DE RECHERCHE ET VÉRIFICATION ---");

const premierFrançais = olympians.find(o => o.nationality === "FRA");
console.log("• find() - Premier athlète français:", premierFrançais?.name);

const indexFrançais = olympians.findIndex(o => o.nationality === "FRA");
console.log("• findIndex() - Index du premier français:", indexFrançais);

const noms = olympians.map(o => o.name);
console.log("• indexOf() - Index de 'Usain Bolt':", noms.indexOf("Usain Bolt"));
console.log("• lastIndexOf() - Dernier index de 'Michael Phelps':", noms.lastIndexOf("Michael Phelps"));

const pays = olympians.map(o => o.nationality);
console.log("• includes() - Le pays 'JPN' est-il présent?", pays.includes("JPN"));

const auMoinsUnMédaillé = olympians.some(o => o.gold + o.silver + o.bronze > 0);
console.log("• some() - Y a-t-il des médaillés?", auMoinsUnMédaillé);

const tousOntTaille = olympians.every(o => o.height != null && o.height > 0);
console.log("• every() - Tous ont une taille valide?", tousOntTaille);
console.log();

// ===== MÉTHODES DE FILTRAGE =====

console.log("--- MÉTHODES DE FILTRAGE ---");

const femmes = olympians.filter(o => o.sex === "female");
console.log("• filter() - Nombre de femmes:", femmes.length);

const multiMédaillés = olympians.filter(o => o.gold + o.silver + o.bronze >= 2);
console.log("• filter() - Athlètes avec ≥ 2 médailles:", multiMédaillés.length);
console.log();

// ===== MÉTHODES DE TRANSFORMATION =====

console.log("--- MÉTHODES DE TRANSFORMATION ---");

const descriptions = olympians.slice(0, 3).map(o =>
  `${o.name} (${o.sex}) - ${o.sport} - ${o.gold + o.silver + o.bronze} médailles`
);
console.log("• map() - Descriptions des 3 premiers:");
descriptions.forEach(desc => console.log("  ", desc));

const sports = olympians.map(o => o.sport);
console.log("• map() - Sports uniques:", [...new Set(sports)]);

const infosAplaties = olympians.slice(0, 2).flatMap(o => [o.name, o.nationality, o.sport]);
console.log("• flatMap() - Infos aplaties:", infosAplaties);

const totalMédailles = olympians.reduce((sum, o) => sum + o.gold + o.silver + o.bronze, 0);
console.log("• reduce() - Total des médailles:", totalMédailles);

const comptageParSport = olympians.reduce((acc, o) => {
  acc[o.sport] = (acc[o.sport] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
console.log("• reduce() - Comptage par sport:", comptageParSport);

const derniersNoms = olympians.slice(-3).reduceRight((acc, o) => acc + o.name + " ", "");
console.log("• reduceRight() - 3 derniers noms inversés:", derniersNoms.trim());
console.log();

// ===== MÉTHODES DE TRI =====

console.log("--- MÉTHODES DE TRI ---");

const tailles = olympians.map(o => o.height).filter(h => h != null);
console.log("• sort() - Tailles avant tri:", tailles);
tailles.sort((a, b) => a - b);
console.log("• sort() - Tailles après tri croissant:", tailles);

const triParNom = olympians.slice(0, 10).sort((a, b) => a.name.localeCompare(b.name));
console.log("• sort() - 10 premiers triés par nom:");
triParNom.forEach(o => console.log(`  ${o.name} - ${o.nationality}`));
console.log();

// ===== MÉTHODES D'ITÉRATION =====

console.log("--- MÉTHODES D'ITÉRATION ---");

console.log("• forEach() - Affichage des 3 premiers athlètes:");
olympians.slice(0, 3).forEach((o, index) => {
  console.log(`  ${index + 1}. ${o.name} (${o.sport}) - ${o.nationality}`);
});
console.log();

// ===== MÉTHODES DE CONVERSION =====

console.log("--- MÉTHODES DE CONVERSION ---");

const premiersNoms = olympians.slice(0, 5).map(o => o.name);
console.log("• join() - Noms séparés par ' | ':", premiersNoms.join(" | "));
console.log("• join() - Noms séparés par des virgules:", premiersNoms.join(", "));

console.log("• toString() - Premières tailles:", olympians.slice(0, 3).map(o => o.height).toString());
console.log();

// ===== MÉTHODES DE CONCATÉNATION =====

console.log("--- MÉTHODES DE CONCATÉNATION ---");

const sprinters = olympians.filter(o => o.sport === "athletics").slice(0, 2);
const nageurs = olympians.filter(o => o.sport === "aquatics").slice(0, 2);
const melange = sprinters.concat(nageurs);
console.log("• concat() - Mélange sprinters + nageurs:");
melange.forEach(o => console.log(`  ${o.name} (${o.sport})`));
console.log();

// ===== MÉTHODES D'APLATISSEMENT =====

console.log("--- MÉTHODES D'APLATISSEMENT ---");

const groupesParPays = [
  olympians.filter(o => o.nationality === "USA").slice(0, 2).map(o => o.name),
  olympians.filter(o => o.nationality === "ESP").slice(0, 2).map(o => o.name),
  olympians.filter(o => o.nationality === "ETH").slice(0, 2).map(o => o.name)
];
console.log("• flat() - Groupes par pays avant aplatissement:", groupesParPays);
console.log("• flat() - Après aplatissement:", groupesParPays.flat());
console.log();

// ===== STATISTIQUES FINALES =====

console.log("--- STATISTIQUES FINALES ---");

const taillesValides = olympians.map(o => o.height).filter(h => h != null);
const tailleTotale = taillesValides.reduce((sum, h) => sum + h, 0);
const tailleMoyenne = tailleTotale / taillesValides.length;
const tailleMin = Math.min(...taillesValides);
const tailleMax = Math.max(...taillesValides);

console.log("• Statistiques des tailles:");
console.log(`  - Taille moyenne: ${tailleMoyenne.toFixed(2)}m`);
console.log(`  - Taille minimale: ${tailleMin}m`);
console.log(`  - Taille maximale: ${tailleMax}m`);

const repartitionPays = olympians.reduce((acc, o) => {
  acc[o.nationality] = (acc[o.nationality] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
console.log("• Répartition par pays:", repartitionPays);

const repartitionSexe = olympians.reduce((acc, o) => {
  acc[o.sex] = (acc[o.sex] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
console.log("• Répartition par sexe:", repartitionSexe);

// =============================================
// GROUPEMENT DES DONNÉES AVEC Object.groupBy
// =============================================

console.log("\n--- GROUPEMENT AVEC Object.groupBy ---");

// Groupement par sport
console.log("• Object.groupBy() - Répartition par sport:");
const athletesParSport = Object.groupBy(olympians, o => o.sport);
for (const [sport, groupe] of Object.entries(athletesParSport)) {
  console.log(`  ${sport}: ${groupe?.length} athlètes`);
}

// Groupement par sexe
console.log("\n• Object.groupBy() - Répartition par sexe:");
const athletesParSexe = Object.groupBy(olympians, o => o.sex ?? "inconnu");
for (const [sexe, groupe] of Object.entries(athletesParSexe)) {
  console.log(`  ${sexe}: ${groupe?.length} athlètes`);
}

// Groupement par sport et sexe combinés
console.log("\n• Object.groupBy() - Répartition par sport et sexe:");
const athletesParSportEtSexe = Object.groupBy(olympians, o =>
  `${o.sport} - ${o.sex ?? "inconnu"}`
);
for (const [cle, groupe] of Object.entries(athletesParSportEtSexe)) {
  console.log(`  ${cle}: ${groupe?.length} athlètes`);
}

// Groupement par catégorie de taille
console.log("\n• Object.groupBy() - Répartition par catégorie de taille:");
const athletesParCategorieTaille = Object.groupBy(olympians, o => {
  if (!o.height) return "taille inconnue";
  if (o.height < 1.70) return "petit";
  if (o.height < 1.85) return "moyen";
  return "grand";
});
Object.entries(athletesParCategorieTaille)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([categorie, groupe]) => {
    console.log(`  ${categorie}: ${groupe.length} athlètes`);
  });

console.log("\n=== FIN DES EXEMPLES ===");