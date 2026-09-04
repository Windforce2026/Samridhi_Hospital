const $=s=>document.querySelector(s);
const toast=m=>{let t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)};
$('#menu').onclick=()=>$('#nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
const form=$('#form');
if(form){form.onsubmit=e=>{
  e.preventDefault();
  var f=e.target,s=f.elements,n=s[0].value,p=s[1].value,dept=s[2].value,date=s[3].value,msg=s[4].value;
  var txt='*New Appointment Request*%0A%0A*Name:* '+encodeURIComponent(n)+'%0APhone: '+encodeURIComponent(p)+'%0ADepartment: '+encodeURIComponent(dept)+'%0ADate: '+encodeURIComponent(date)+'%0AMessage: '+encodeURIComponent(msg);
  window.open('https://wa.me/917478066817?text='+txt,'_blank');
  $('#message').textContent='Thank you! Opening WhatsApp to send your request.';
  f.reset();
  toast('Appointment request submitted successfully.');
};}

const specData=[
{name:"Critical Care & Emergency Medicine",icon:"🚨",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"},
{name:"Neurology & Brain & Spine Surgery",icon:"🧠",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80"},
{name:"Gastroenterology & Digestive Health",icon:'<img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=80&q=80" alt="Gastroenterology" style="width:100%;height:100%;object-fit:cover;border-radius:12px">',desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&w=1200&q=80"},
{name:"Obstetrics, Gynaecology & Mother Care",icon:"🤱",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80"},
{name:"Dentistry & Oral & Maxillofacial Surgery",icon:"🦷",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"},
{name:"Cardiology & CTVS",icon:"❤️",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80"},
{name:"ENT, Head & Neck Surgery",icon:'<img src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=80&q=80" alt="ENT" style="width:100%;height:100%;object-fit:cover;border-radius:12px">',desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1200&q=80"},
{name:"Orthopaedics & Trauma Surgery",icon:"🦴",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"},
{name:"Plastic & Reconstructive Surgery",icon:"✨",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=1200&q=80"},
{name:"Pulmonology & Respiratory Care",icon:"🫁",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1623150502742-55127f8d5b66?auto=format&fit=crop&w=1200&q=80"},
{name:"Nephrology & Urology",icon:"🫘",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"},
{name:"Paediatrics & Neonatology",icon:"👶",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80"},
{name:"Oncology & Cancer Care",icon:"💊",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80"},
{name:"Psychiatry & Mental Health",icon:"💚",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"},
{name:"General & Laparoscopic Surgery",icon:"🩺",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"},
{name:"Dermatology & Aesthetic Medicine",icon:"🧴",desc:"Specialised multispeciality care supported by experienced medical professionals and advanced healthcare facilities.",img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"}
];
const pad=n=>String(n).padStart(2,'0');
const gridEl=$('#specGrid');
if(gridEl){
  gridEl.innerHTML=specData.map((s,i)=>`
    <button type="button" class="spec-card" data-idx="${i}" style="background-image:url('${s.img}')">
      <span class="spec-card-shade" aria-hidden="true"></span>
      <span class="spec-card-icon" aria-hidden="true"><span>${s.icon}</span></span>
      <span class="spec-card-name">${s.name}</span>
      <span class="spec-card-arrow" aria-hidden="true">→</span>
    </button>
  `).join('');
}
const modal=$('#specModal');
const modalNum=$('#modalNum'),modalTitle=$('#modalTitle'),modalDesc=$('#modalDesc'),modalImg=$('#modalImg'),modalIcon=$('#modalIcon');
function openSpec(idx){
  const s=specData[idx];
  modalNum.textContent=pad(idx+1);
  modalTitle.textContent=s.name;
  modalDesc.textContent=s.desc;
  modalImg.src=s.img;
  modalImg.alt=s.name;
  modalIcon.textContent=s.icon;
  modal.hidden=false;
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>modal.classList.add('open'));
}
function closeSpec(){
  modal.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(()=>{modal.hidden=true;},350);
}
if(gridEl){
  gridEl.addEventListener('click',e=>{
    const card=e.target.closest('.spec-card');
    if(card)openSpec(parseInt(card.dataset.idx));
  });
}
if(modal){
  modal.querySelectorAll('[data-close]').forEach(el=>el.onclick=closeSpec);
  const cta=$('#modalCta');
  if(cta){cta.onclick=closeSpec;}
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeSpec();});
}
const revealEls=document.querySelectorAll('.spec-intro,.spec-grid,.spec-trust');
if('IntersectionObserver' in window){
  const ro=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal');ro.unobserve(e.target);}});
  },{threshold:.08});
  revealEls.forEach(el=>ro.observe(el));
}else{revealEls.forEach(el=>el.classList.add('reveal'));}





/* ===================== DOCTORS ===================== */
const doctorData=[
{d:"Medicine & Critical Care",n:"Dr. Swapan Kumar Khan",q:["MBBS, MD (Physiology)","Fellowship in Diabetology & Critical Care"]},
{d:"Pulmonology",n:"Dr. Rebekah Subba",q:["MBBS, MD, Chest Medicine","Consultant Pulmonologist & Critical Care"]},
{d:"Pulmonology",n:"Dr. Sayer Miridha",q:["MBBS, MD, Consultant Pulmonologist"]},
{d:"Neuro Surgery",n:"Dr. Sayed Khizar Uz Zaman",q:["MBBS, DrNB (Neurosurgery)","MNAMS, FISNI, FIPN, FIESB, FISBS, ECMINT","(Oxford, UK)"]},
{d:"Neuro Surgery",n:"Dr. Vishram S. Pandey",q:["MBBS, MS, MCh (Neuro Surgery)","(NIMHANS, Bangalore)"]},
{d:"General Surgery",n:"Dr. Adarsh Bhardwaj",q:["MBBS, M.S General Surgery, DNB General Surgery","F.M.A.S Experience in Advance Laparoscopic Surgery & Gastrosurgery","(Apollo Main Hospital Chennai)"]},
{d:"General Surgery",n:"Dr. Penzin D Bhutia",q:["MBBS, MS (General & Laparoscopic Surgery)"]},
{d:"ENT",n:"Dr. Sandeep Ghosh",q:["MBBS, MS (ENT)"]},
{d:"ENT",n:"Dr. Parth Pratim Saha",q:["MBBS, MS (ENT)"]},
{d:"ENT",n:"Dr. Sachin Prasad",q:["MBBS, MS (ENT)"]},
{d:"ENT",n:"Dr. Arunava Ghosh",q:["MBBS, MS (ENT)"]},
{d:"Plastic & Reconstructive Surgery",n:"Dr. Amit Kumar Chowdhary",q:["MBBS, MS, MCh (Plastic Surgery)"]},
{d:"Nephrology",n:"Dr. Ratan Kumar Agarwal",q:["MBBS, DNB (Nephrology)"]},
{d:"Urology",n:"Dr. Washim Mollah",q:["MBBS, MS, FAMS, MCh (Urology)"]},
{d:"Cardiology",n:"Dr. Rajesh Kumar",q:["MBBS, DIP (Cardio)"]},
{d:"Cardiology",n:"Dr. Kailash Goyal",q:["MBBS, MD (Cardio)"]},
{d:"Dermatology",n:"Dr. Suman Gupta",q:["MBBS, MD, DM"]},
{d:"Orthopaedics",n:"Dr. Mrityunjay Roy",q:["MBBS, MS (Orthopaedics)","Fellowship in Arthoscopy & Sports Medicine"]},
{d:"Orthopaedics",n:"Dr. Ranjit Kumar Singh",q:["MBBS, MS (Orthopaedics)"]},
{d:"Gastroenterology",n:"Dr. Prabhat Ranjan",q:["MBBS, MD, DM (Gastroenterology)"]},
{d:"Obstetrics & Gynaecology",n:"Dr. Sumit Das",q:["MBBS, MS"]},
{d:"Obstetrics & Gynaecology",n:"Dr. Sindhu Bala",q:["MBBS, MD, DGO"]},
{d:"Obstetrics & Gynaecology",n:"Dr. Neelam Singla",q:["MBBS, MD, DGO"]},
{d:"Psychiatry",n:"Dr. Rajesh Thakur",q:["MBBS, MD, DM"]},
{d:"Oral & Maxillofacial Surgery",n:"Dr. Subhajit Das",q:["BDS, MDS"]},
{d:"Oncology",n:"Dr. T.N. Mitra",q:["MBBS, MD, DM (Oncology)"]},
{d:"Paediatrics",n:"Dr. S.K Tiwari",q:["MBBS, MD, (Paediatrics)"]},
{d:"Dentistry",n:"Dr. Sourav Bose",q:["BDS","MDS"]}
];
var deptIcon={
"Medicine & Critical Care":"🚨","Pulmonology":"🫁","Neuro Surgery":"🧠","General Surgery":"🩺",
"ENT":'<img src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=80&q=80" alt="ENT" style="width:100%;height:100%;object-fit:cover;border-radius:12px">',
"Plastic & Reconstructive Surgery":"✨","Nephrology":"🫘","Urology":"🫘",
"Cardiology":"❤️","Dermatology":"🧴","Orthopaedics":"🦴",
"Gastroenterology":'<img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=80&q=80" alt="Gastroenterology" style="width:100%;height:100%;object-fit:cover;border-radius:12px">',
"Obstetrics & Gynaecology":"🤱","Psychiatry":"💚","Oral & Maxillofacial Surgery":"🦷",
"Oncology":"💊","Paediatrics":"👶","Dentistry":"🦷"};
var deptImage={
"Medicine & Critical Care":"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=980&q=80",
"Pulmonology":"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=980&q=80",
"Neuro Surgery":"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=980&q=80",
"General Surgery":"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=980&q=80",
"ENT":"https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=980&q=80",
"Plastic & Reconstructive Surgery":"https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=980&q=80",
"Nephrology":"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=980&q=80",
"Urology":"https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=980&q=80",
"Cardiology":"https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=980&q=80",
"Dermatology":"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=980&q=80",
"Orthopaedics":"https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&w=980&q=80",
"Gastroenterology":"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=980&q=80",
"Obstetrics & Gynaecology":"https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=980&q=80",
"Psychiatry":"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=980&q=80",
"Oral & Maxillofacial Surgery":"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=980&q=80",
"Oncology":"https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=980&q=80",
"Paediatrics":"https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=980&q=80",
"Dentistry":"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=980&q=80"
};

/* card grid */
var docGrid=$('#docGrid');
function buildDocCard(d,idx){
  var img=deptImage[d.d]||deptImage["Medicine & Critical Care"];
  return '<button type="button" class="doc-card-item" data-idx="'+idx+'" style="background-image:url(\''+img+'\')">'+
    '<span class="doc-card-shade" aria-hidden="true"></span>'+
    '<span class="doc-card-icon" aria-hidden="true"><span>'+(deptIcon[d.d]||'<img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=80&q=80" alt="Doctor" style="width:100%;height:100%;object-fit:cover;border-radius:12px">')+'</span></span>'+
    '<span class="doc-card-name">'+d.n+'</span>'+
    '<span class="doc-card-dept">'+d.d+'</span>'+
    '<span class="doc-card-arrow" aria-hidden="true">→</span>'+
  '</button>';
}
if(docGrid){
  docGrid.innerHTML=doctorData.map(buildDocCard).join('');
}

/* doctor modal */
var docModal=$('#docModal');
var docModalNum=$('#docModalNum'),docModalName=$('#docModalName'),docModalQual=$('#docModalQual'),
    docModalDept=$('#docModalDept'),docModalImg=$('#docModalImg'),docModalIcon=$('#docModalIcon');
function openDoc(idx){
  var d=doctorData[idx];
  if(!d)return;
  docModalNum.textContent=pad(idx+1);
  docModalName.textContent=d.n;
  docModalDept.textContent=d.d.toUpperCase();
  docModalQual.innerHTML=d.q.map(function(q){return '<span class="dq">'+q+'</span>';}).join('');
  docModalIcon.innerHTML=deptIcon[d.d]||'<img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=80&q=80" alt="Doctor" style="width:100%;height:100%;object-fit:cover;border-radius:12px">';
  docModalImg.src=deptImage[d.d]||deptImage["Medicine & Critical Care"];
  docModalImg.alt=d.n;
  docModal.hidden=false;
  document.body.style.overflow='hidden';
  requestAnimationFrame(function(){docModal.classList.add('open');});
}
function closeDoc(){
  docModal.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(function(){docModal.hidden=true;},350);
}
if(docGrid){
  docGrid.addEventListener('click',function(e){
    var card=e.target.closest('.doc-card-item');
    if(card)openDoc(parseInt(card.dataset.idx));
  });
}
if(docModal){
  docModal.querySelectorAll('[data-close]').forEach(function(el){el.onclick=closeDoc;});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!docModal.hidden)closeDoc();});
}

/* ===================== DIAGNOSTICS ===================== */
var diagData=[
{icon:"🔬",name:"Pathology",desc:"Comprehensive laboratory and pathology services including haematology, biochemistry, microbiology, histopathology and clinical pathology with NABL-accredited processing for accurate and reliable results.",img:"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"},
{icon:"🩻",name:"X-Ray",desc:"Digital radiography with low-dose imaging technology for skeletal, chest and abdominal examinations. High-resolution prints available instantly for physician review.",img:"https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&w=1200&q=80"},
{icon:"🔊",name:"Ultrasonography (USG)",desc:"Real-time ultrasound imaging including obstetric, abdominal, pelvic, thyroid and Doppler studies performed by experienced sonographers on advanced GE equipment.",img:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80"},
{icon:"🖥️",name:"CT Scan",desc:"Multi-slice computed tomography with contrast and non-contrast protocols for trauma, neurological, cardiac and abdominal imaging with rapid reconstruction.",img:"https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&w=1200&q=80"},
{icon:"📈",name:"ECG",desc:"12-lead electrocardiogram for rapid cardiac rhythm assessment, acute MI detection and pre-operative screening with immediate digital reporting.",img:"https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80"},
{icon:"🧠",name:"EEG",desc:"Electroencephalogram recording for seizure evaluation, epilepsy monitoring, sleep disorder assessment and neurological diagnostics.",img:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80"},
{icon:"🔍",name:"Endoscopy",desc:"Diagnostic and therapeutic upper GI endoscopy, colonoscopy and ERCP performed by trained gastroenterologists using high-definition video endoscopes.",img:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"},
{icon:"🩺",name:"Colonoscopy",desc:"Complete colon examination for colorectal screening, polyp detection and biopsy with sedation support and same-day preliminary findings.",img:"https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=1200&q=80"}
];
var diagIconMap={"🔬":"🔬","🩻":"🩻","🔊":"🔊","🖥️":"🖥️","📈":"📈","🧠":"🧠","🔍":"🔍","🩺":"🩺"};
var diagGrid=$('#diagGrid');
function buildDiagCard(d,idx){
  return '<button type="button" class="diag-card" data-idx="'+idx+'" style="background-image:url(\''+d.img+'\')">'+
    '<span class="diag-card-shade" aria-hidden="true"></span>'+
    '<span class="diag-card-icon" aria-hidden="true"><span>'+d.icon+'</span></span>'+
    '<span class="diag-card-name">'+d.name+'</span>'+
    '<span class="diag-card-arrow" aria-hidden="true">→</span>'+
  '</button>';
}
if(diagGrid){
  diagGrid.innerHTML=diagData.map(buildDiagCard).join('');
}

/* diagnostics modal */
var diagModal=$('#diagModal');
var diagModalNum=$('#diagModalNum'),diagModalName=$('#diagModalName'),diagModalDesc=$('#diagModalDesc'),
    diagModalImg=$('#diagModalImg'),diagModalIcon=$('#diagModalIcon');
function openDiag(idx){
  var d=diagData[idx];
  if(!d)return;
  diagModalNum.textContent=pad(idx+1);
  diagModalName.textContent=d.name;
  diagModalDesc.textContent=d.desc;
  diagModalIcon.textContent=d.icon;
  diagModalImg.src=d.img;
  diagModalImg.alt=d.name;
  diagModal.hidden=false;
  document.body.style.overflow='hidden';
  requestAnimationFrame(function(){diagModal.classList.add('open');});
}
function closeDiag(){
  diagModal.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(function(){diagModal.hidden=true;},350);
}
if(diagGrid){
  diagGrid.addEventListener('click',function(e){
    var card=e.target.closest('.diag-card');
    if(card)openDiag(parseInt(card.dataset.idx));
  });
}
if(diagModal){
  diagModal.querySelectorAll('[data-close]').forEach(function(el){el.onclick=closeDiag;});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!diagModal.hidden)closeDiag();});
}

/* ===================== FACILITIES ===================== */
var facData=[
{
  icon:"🚑",name:"24×7 Ambulance Services",
  desc:"24×7 ambulance services supporting patients when timely care matters most. Professional emergency transport available around the clock.",
  img:"https://images.unsplash.com/photo-1587745416914-2f8a1b12568b?auto=format&fit=crop&w=1200&q=80"
},
{
  icon:"💊",name:"24×7 Pharmacy",
  desc:"24-hour in-house pharmacy stocked with a comprehensive formulary to serve patients and visitors around the clock.",
  img:"https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
},
{
  icon:"🩺",name:"Polyclinic Consultations",
  desc:"Multi-speciality polyclinic consultations bringing together experienced physicians for comprehensive outpatient care.",
  img:"https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&w=1200&q=80"
},
{
  icon:"🏠",name:"Home Care Services",
  desc:"Professional healthcare services delivered to your doorstep, ensuring comfort and continuity of care in familiar surroundings.",
  img:"https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=1200&q=80"
}
];

/* card grid */
var facGrid=$('#facGrid');
function buildFacCard(d,idx){
  return '<button type="button" class="fac-card-item" data-idx="'+idx+'" style="background-image:url(\''+d.img+'\')">'+
    '<span class="fac-card-shade" aria-hidden="true"></span>'+
    '<span class="fac-card-icon" aria-hidden="true"><span>'+d.icon+'</span></span>'+
    '<span class="fac-card-name">'+d.name+'</span>'+
    '<span class="fac-card-arrow" aria-hidden="true">→</span>'+
  '</button>';
}
if(facGrid){
  facGrid.innerHTML=facData.map(buildFacCard).join('');
}

/* facility modal */
var facModal=$('#facModal');
var facModalNum=$('#facModalNum'),facModalName=$('#facModalName'),facModalDesc=$('#facModalDesc'),
    facModalImg=$('#facModalImg'),facModalIcon=$('#facModalIcon');
function openFac(idx){
  var d=facData[idx];
  if(!d)return;
  facModalNum.textContent=pad(idx+1);
  facModalName.textContent=d.name;
  facModalDesc.textContent=d.desc;
  facModalIcon.textContent=d.icon;
  facModalImg.src=d.img;
  facModalImg.alt=d.name;
  facModal.hidden=false;
  document.body.style.overflow='hidden';
  requestAnimationFrame(function(){facModal.classList.add('open');});
}
function closeFac(){
  facModal.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(function(){facModal.hidden=true;},350);
}
if(facGrid){
  facGrid.addEventListener('click',function(e){
    var card=e.target.closest('.fac-card-item');
    if(card)openFac(parseInt(card.dataset.idx));
  });
}
if(facModal){
  facModal.querySelectorAll('[data-close]').forEach(function(el){el.onclick=closeFac;});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!facModal.hidden)closeFac();});
}

/* reveal */
var docRevealEls=document.querySelectorAll('.doc-grid,.doc-trust,.doc-intro,.diag-grid,.diag-trust,.diag-intro,.fac-grid,.fac-trust,.fac-intro');
if('IntersectionObserver' in window){
  var dro=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('reveal');dro.unobserve(e.target);}});
  },{threshold:.08});
  docRevealEls.forEach(function(el){dro.observe(el);});
}else{docRevealEls.forEach(function(el){el.classList.add('reveal');});}
