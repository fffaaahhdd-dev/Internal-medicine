/* ================= Kumar & Clark's Clinical Medicine, 10th ed. — pearls [K] and ⚠ Corrections =================
   Ch 9 Water balance, fluids & electrolytes · Ch 21 Endocrinology (calcium) · Ch 31 Hypertension · Ch 36 Kidney & urinary tract disease */
function KP(lec,topic,o){const t=LEC[lec].topics.find(x=>x.id===topic); if(!t) return; Object.assign(t,o);}
function KQ(lec,match,note){const q=LEC[lec].quiz.find(x=>x.q.includes(match)||x.v.includes(match)); if(q) q.kn=note;}

/* ---------- Hypertension ---------- */
KP("htn","htn-meas",{pearls:[
 "Cuff technique: bladder >80% of the arm, cuff at heart height, back supported, legs uncrossed [K ch31]",
 "Office BP taken by healthcare staff is about 5/5 mmHg higher than at home (white-coat effect); daytime ambulatory BP is 5–10/5 mmHg lower than office BP, so out-of-office thresholds are lower (>135/85) [K ch31]",
 "Antihypertensives are not recommended for white-coat hypertension [K ch31]",
 "Auscultatory (cuff + stethoscope) measurement is still preferred in atrial fibrillation [K ch31]"]});
KP("htn","htn-cause",{pearls:[
 "Drugs that raise BP include NSAIDs, corticosteroids, VEGF inhibitors and some antidepressants (e.g. venlafaxine) [K ch31]",
 "Ask women of child-bearing age whether they are trying to become pregnant, as many first-line drugs are not recommended [K ch31]"],
 corr:[
 "Lecture: essential HTN is 95% and renal artery stenosis is the most common secondary cause [L p1]. Kumar: secondary causes are about 10% of hypertension (more under age 30), and the most common are thought to be primary hyperaldosteronism, obstructive sleep apnoea and obesity [K ch31]. Current: Kumar.",
 "Lecture: prehypertension 120–139/80–89; Stage I 140–159/90–99; Stage II ≥160/≥100 [L p1]. Kumar (Box 31.3): high-normal 130–139/80–89; grade 1 140–159/90–99; grade 2 160–179/100–109; severe >180/>110; isolated systolic >140 with <90 [K ch31 Box 31.3]. Current: Kumar's grades (grade 1 matches Stage I)."]});
KP("htn","htn-mgmt",{pearls:[
 "Initial therapy: one or two of ACEI/ARB, CCB or thiazide-like diuretic; ESH/ESC suggest most patients start on a single-pill combination [K ch31]",
 "ARBs are better tolerated than ACEIs (less cough and angio-oedema) [K ch31]",
 "Spironolactone is the best fourth-line drug (PATHWAY-2); uncontrolled on 3–4 drugs = resistant hypertension → specialist referral [K ch31]",
 "Pregnancy: labetalol (licensed in pregnancy), methyldopa, dihydropyridine CCB such as nifedipine [K ch31 Box 31.6]",
 "Thiazide-like diuretics: gout is a contraindication [K ch31 Box 31.6]"],
 corr:[
 "Lecture: target <140/90 if <60 years, <150/90 if ≥60 [L p2]. Kumar: in the UK <140/90 if <80 years and <150/90 if >80 years, with a growing international trend to aim for <130/80 in all patients if tolerated [K ch31]. Current: Kumar.",
 "Lecture: thiazide (with CCB) as initial monotherapy in Black patients [L p2]. Kumar (NICE): older and Black African patients have low renin, so a CCB is recommended; younger white patients start an ACEI or ARB [K ch31]. Current: Kumar."]});
KP("htn","htn-comp",{pearls:[
 "Keith–Wagener–Barker has four grades; newer practice merges the two mild ones: Mild = arteriolar narrowing, AV nicking · Moderate = blot/dot/flame haemorrhages, microaneurysms, cotton-wool spots, hard exudates · Severe = moderate signs + papilloedema [K ch31 Fig 31.5]",
 "LVH may be felt as a thrusting apex beat and seen as increased chest-lead voltages on ECG [K ch31]"],
 check:["The lecture's word “Figure HTN” is unclear. Kumar links papilloedema (grade 4) and fibrinoid small-artery necrosis to malignant hypertension [K ch31 Fig 31.5][K ch31 Box 31.7], so “Figure HTN” most likely means malignant hypertension."]});
KP("htn","htn-crisis",{pearls:[
 "First-line IV drugs: labetalol or nicardipine (malignant HTN, encephalopathy); GTN or labetalol in ACS; labetalol + IV magnesium in pre-eclampsia [K ch31 Box 31.7]",
 "The rate and size of the BP rise can matter more than the absolute level, e.g. pre-eclampsia can occur at >140/90 [K ch31]",
 "Malignant hypertension is often associated with AKI from fibrinoid small-artery necrosis [K ch31 Box 31.7]"],
 corr:[
 "Lecture text: emergency = >180 and/or >120 + end-organ damage; slide image: >180/110 [L p4]. Kumar: emergency = significantly raised BP, usually >180/120, with acute target-organ damage; >180/>110 is Kumar's “severe hypertension” grade [K ch31][K ch31 Box 31.3]. Current: >180/120 (the lecture text).",
 "Lecture: reduce MAP by 25% in 1–2 h [L p4]. Kumar: depends on the syndrome — malignant HTN 25% MAP reduction within a few hours; encephalopathy immediate 25% MAP reduction; aortic dissection, ACS and pre-eclampsia immediate SBP reduction [K ch31 Box 31.7]. Current: Kumar."],
 check:[]});
KQ("htn","Which pairing is correct?","⚠ Correction: Kumar says secondary causes are ~10% and the most common are primary hyperaldosteronism, OSA and obesity [K ch31]. The answer above follows the lecture.");
KQ("htn","BP goal in this lecture?","⚠ Correction: Kumar's UK target is <140/90 under 80 years and <150/90 over 80 [K ch31]. The answer above follows the lecture.");
KQ("htn","Classify and treat.","Kumar agrees: emergency is usually >180/120 with acute target-organ damage [K ch31].");

/* ---------- AKI & CKD ---------- */
KP("aki","aki-main",{pearls:[
 "KDIGO staging: stage 1 SCr 1.5–1.9× baseline or ≥0.3 mg/dL rise, UO <0.5 mL/kg/h for 6–12 h · stage 2 SCr 2–2.9×, UO <0.5 for ≥12 h · stage 3 SCr 3× or starting RRT, or anuria ≥12 h [K ch36 Box 36.30]",
 "About 1 in 5 adults and 1 in 3 children develop AKI during a hospital episode [K ch36]",
 "No single urine index is reliable on its own; lab tests are no substitute for clinical assessment [K ch36]",
 "IV mannitol, furosemide or “renal-dose” dopamine are not supported in ATN; recovery typically takes 7–21 days and is delayed by sepsis [K ch36]",
 "RRT indications also include removing a causative drug (gentamicin, lithium, severe aspirin overdose); early RRT has not improved outcomes and up to 30% recover without it [K ch36]"],
 corr:[
 "Lecture: pre-renal urine Na <20, renal >30–40; FeNa <1% vs >2%; renal urine osmolality given as <500 in the list and <350 in the summary [L p6]. Kumar (Box 36.32): pre-renal SG >1.020, Uosm >500, urine Na <10, FeNa <1%; intrinsic SG <1.010, Uosm <350, urine Na >20, FeNa >1% [K ch36 Box 36.32]. Current: Kumar — renal urine osmolality is <350."],
 check:[]});
KP("aki","aki-rhabdo",{pearls:[
 "Causes include trauma, compartment syndrome, extreme exertion (marathon), status epilepticus, statins, malaria/antimalarials, snake and insect venom [K ch36]",
 "K, phosphate and lactate rise quickly; CK is massively elevated [K ch36]",
 "Look for “woody-hard” muscle compartments: fasciotomy may be needed [K ch36]"],
 corr:["Lecture: IV fluids, mannitol and bicarbonate [L p4]. Kumar: early, vigorous fluid resuscitation is vital and sodium bicarbonate may limit myoglobin injury; mannitol is not recommended in rhabdomyolysis, and Kumar says IV mannitol is not supported in ATN [K ch36]. Current: Kumar — fluids first, ± bicarbonate."]});
KP("aki","aki-tls",{pearls:["Rasburicase is a recombinant urate oxidase that converts uric acid to the more soluble allantoin [K ch36]"]});
KP("aki","ckd",{pearls:["Diabetes mellitus is the most common cause of CKD (agrees with lecture) [K ch36]","CKD implies impairment for >3 months; in most stage 1–3 CKD, function does not keep declining [K ch36]"]});
KP("aki","rta",{pearls:["Type 4 RTA is hyporeninaemic hypoaldosteronism and causes hyperkalaemia [K ch9]","RTA is associated with nephrocalcinosis and stone formation; plasma bicarbonate is low [K ch36]"]});
KQ("aki","Diagnosis and initial treatment?","⚠ Correction: Kumar recommends early vigorous IV fluids ± bicarbonate; mannitol is not supported [K ch36].");

/* ---------- GNs ---------- */
KP("gn","gn-ns",{pearls:["Prophylactic anticoagulation may be indicated; if renal vein thrombosis occurs, anticoagulation is permanent [K ch36]"],
 corr:["Lecture: proteinuria “>3.5 g/dl” [L p1]. Kumar: >3.5 g/day [K ch36]. Current: >3.5 g/day (the lecture unit is a typo)."],
 check:["Membranous proteinuria grades are still written as “mg/dl” (see Membranous); Kumar does not give those grades."]});
KP("gn","gn-mcd",{pearls:[
 "Prednisolone 60 mg/m² daily (max 80 mg/day) for up to 4–6 weeks, then 40 mg/m² alternate days for 4–6 weeks, reverses proteinuria in >95% of children; adults respond more slowly [K ch36 p1355]",
 "Two-thirds of children relapse; ciclosporin or tacrolimus are second-line and must be continued long-term [K ch36 p1355]",
 "Remission lasting 4 years after steroids makes further relapse very rare [K ch36 p1355]"]});
KP("gn","gn-fsgs",{pearls:["Primary FSGS: massive, usually non-selective proteinuria, haematuria, HTN and renal impairment; often steroid-resistant and usually recurs in a transplanted kidney [K ch36]","In secondary FSGS, hypoalbuminaemia is unusual even with heavy proteinuria [K ch36]"]});
KP("gn","gn-mem",{pearls:[
 "75% of idiopathic cases have IgG4 antibodies against PLA2R; anti-THSD7A is linked with underlying malignancy [K ch36]",
 "Drug causes: penicillamine, gold, NSAIDs, probenecid, mercury, captopril [K ch36]",
 "About one-third remit (spontaneously or with therapy); about 40% develop CKD [K ch36]"],
 check:["Proteinuria grades are written as “mg/dl” (<4, 4–8, >8). Kumar does not give these grades, so the unit could not be confirmed."]});
KP("gn","gn-psgn",{pearls:["Nephritis follows 1–3 weeks after group A β-haemolytic streptococcal throat infection, otitis media or cellulitis; mainly children; now rare in developed countries [K ch36 p1361]"]});
KP("gn","gn-gp",{pearls:["Oliguria or creatinine >600–700 µmol/L at start usually means irreversible renal failure; unlike other autoimmune diseases it does not relapse once treated [K ch36]"],
 corr:["Lecture: plasmapheresis [L p4]. Kumar: plasma exchange (removes anti-GBM) + steroids + cyclophosphamide [K ch36]. Current: Kumar (all three)."]});
KP("gn","gn-iga",{pearls:["About 5% are nephrotic; ESKD risk ~25% with proteinuria >1 g/day, raised creatinine or hypertension [K ch36]","Recurrent macroscopic haematuria is a good prognostic sign [K ch36]"],
 corr:["Lecture: recurrent microscopic haematuria with URTIs in children [L p5]. Kumar: asymptomatic microscopic haematuria or recurrent macroscopic haematuria after an upper respiratory or GI viral infection [K ch36]. Current: Kumar — both occur."],
 check:[]});
KP("gn","gn-ln",{pearls:["Class IV (diffuse, >50%) is the most common and most severe form, with subendothelial deposits; it progresses to nephrotic syndrome, HTN and renal insufficiency [K ch36 Box 36.16]"]});
KP("gn","gn-mpgn",{pearls:["Kumar calls it mesangiocapillary GN: new basement membrane gives a “tramline” effect; type 2 (dense deposit disease) has ribbon-like intramembranous deposits staining for C3, with C3 nephritic factor [K ch36]"]});

/* ---------- Electrolytes ---------- */
KP("elec","el-hypona",{pearls:[
 "Hypovolaemic: 0.9% saline · euvolaemic (SIADH): fluid restriction 500–700 mL/day · hypervolaemic: fluid and salt restriction ± loop diuretic [K ch9]",
 "Most common acute hyponatraemia in adults: postoperative iatrogenic [K ch9]",
 "1 mL/kg of 3% saline raises plasma Na by about 1 mmol/L; check Na every 1–2 h [K ch9]"],
 corr:["Lecture: hypertonic saline only when Na <110 [L p1]. Kumar: give 3% saline (1 mL/kg over 1 h) for symptomatic hyponatraemia (seizures, coma, cerebral oedema), and correct by no more than 8 mmol/L in 24 h and 18 mmol/L in 48 h [K ch9]. Current: Kumar — symptoms decide, not a fixed Na."],
 check:["The lecture writes “poutine demyelination”; Kumar's term is osmotic demyelination syndrome [K ch9]."]});
KP("elec","el-hypoca",{pearls:[
 "Chvostek: tapping over the facial nerve twitches the face · Trousseau: cuff above systolic for 3 min causes carpal spasm [K ch21]",
 "Severe hypocalcaemia can cause papilloedema and a prolonged QT [K ch21]",
 "Severe hypomagnesaemia causes functional hypoparathyroidism, reversed by Mg replacement [K ch21]"]});
KP("elec","el-hyperca",{pearls:[
 "Primary hyperparathyroidism and malignancy cause >90% of hypercalcaemia [K ch21]",
 "Severe (Ca >3.5 mmol/L or unwell): 0.9% saline 4–6 L on day 1 → IV bisphosphonate (pamidronate) is the treatment of choice in malignancy or unknown cause; prednisolone in myeloma, sarcoidosis, vitamin D excess; calcitonin is short-lived and little used [K ch21 Box 21.56]"]});
KP("elec","el-hypok",{pearls:["Hypokalaemia increases digoxin binding to cardiac cells, raising the risk of toxicity [K ch9]"]});
KP("elec","el-hyperk",{pearls:[
 "Calcium gluconate protects cell membranes but does not lower K [K ch9]",
 "Insulin 10 units + 50 mL of 50% glucose IV over 10–15 min lowers K by about 1 mmol/L in 60 min; monitor glucose for ≥6 h; glucose alone is not recommended [K ch9 Box 9.20]",
 "Salbutamol is rarely used (tremor at the doses needed); consider bicarbonate if pH <6.9 [K ch9 Box 9.20]"]});
KP("elec","el-hypermg",{pearls:["Usually seen in AKI or CKD given magnesium laxatives, antacids or enemas; weakness, hyporeflexia, respiratory paralysis and conduction defects above ~2 mmol/L; 10 mL of 10% calcium gluconate IV antagonises it [K ch9]"]});
KQ("elec","Management and key danger?","⚠ Correction: Kumar gives 3% saline for symptomatic hyponatraemia whatever the level, limiting the rise to 8 mmol/L in 24 h [K ch9].");
