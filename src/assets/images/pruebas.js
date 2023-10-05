// data = [
//     {
//       username: 'Alicia Stanger',
//       photoURL: '',
//       id: '635AAD33-05E8-433B-9504-B293587800D4',
//       date: '03-20-2023',
//       credential: [
//         {
//           type: 'Address',
//           title: 'Credencials/Address',
//           adress: '10134 NW 138 Street Suite 201-B',
//           state: 'Miami, Florida 33131',
//           country: 'United States',
//         },
//         {
//           type: 'document',
//           title: 'Credencials/Identity document',
//           documentType: 'Goverment-issued ID',
//           documentNumber: '987543219012761',
//           verified: true,
//         },
//         {
//           type: 'phone',
//           title: 'Credencials/Phone',
//           phoneNumber: '+1 303-999-999901'
//         },
//         {
//           type: 'change',
//           title: 'Credencials/Personal information/Basic info/Full name',
//           before: 'Julian Romero',
//           after: 'Julian Romero',
//         },
//         {
//           type: 'change',
//           title: 'Credencials/Personal information/Basic info/First name',
//           before: 'Julian',
//           after: 'Julian',
//         }
//       ],
//     }
//   ];

//   data = [
//     {
//       username: 'Alicia Stanger, updated the profile',
//       photoURL: '',
//       id: '635AAD33-05E8-433B-9504-B293587800D4',
//       date: '03-20-2023',
//     },
//     {
//       username: 'Sijmen Immens, replaced the credential',
//       photoURL: '',
//       id: '635AAD33-05E8-433B-9504-B293587800D4',
//       date: '02-20-2023',
//     },
//     {
//       username: 'Alicia Stanger, updated the profile',
//       photoURL: '',
//       id: '635AAD33-05E8-433B-9504-B293587800D4',
//       date: '02-20-2023',
//      },
//      {
//       username: 'Shirline Dungey, added information to the profile',
//       photoURL: '',
//       id: '635AAD33-05E8-433B-9504-B293587800D4',
//       date: '02-20-2023',
//      },
//      {
//       username: 'Sijmen Immens, delected information from the credential',
//       photoURL: '',
//       id: '635AAD33-05E8-433B-9504-B293587800D4',
//       date: '14-08-2021',
//      },
//      {
//       username: 'Jhon Brown, created the profile',
//       photoURL: '',
//       id: '635AAD33-05E8-433B-9504-B293587800D4',
//       date: '02-04-2021',
//      }
//   ]

// // ***********************************************

//   const arr = [1,5,6,2,3,9,8,7,4]
//   let newArr = arr.sort((a,b)=>(b - a))

// console.log(newArr)

// // ***********************************************

// const data3 = [
//   {
//     username: 'Alicia Stanger, updated the profile',
//     photoURL: '',
//     id: '635AAD33-05E8-433B-9504-B293587800D4',
//     date: '03-20-2023',
//   },
//   {
//     username: 'Jhon Brown, created the profile',
//     photoURL: '',
//     id: '635AAD33-05E8-433B-9504-B293587800D4',
//     date: '02-04-2021',
//    },
//   {
//     username: 'Sijmen Immens, replaced the credential',
//     photoURL: '',
//     id: '635AAD33-05E8-433B-9504-B293587800D4',
//     date: '02-20-2023',
//   },
//   {
//     username: 'Alicia Stanger, updated the profile',
//     photoURL: '',
//     id: '635AAD33-05E8-433B-9504-B293587800D4',
//     date: '02-20-2023',
//    },
//    {
//     username: 'Sijmen Immens, delected information from the credential',
//     photoURL: '',
//     id: '635AAD33-05E8-433B-9504-B293587800D4',
//     date: '14-08-2021',
//    },
//    {
//     username: 'Shirline Dungey, added information to the profile',
//     photoURL: '',
//     id: '635AAD33-05E8-433B-9504-B293587800D4',
//     date: '02-20-2023',
//    }
// ]

//     let dataInOrder = data.sort((a,b)=>(b - a))
//     console.log(dataInOrder)

const structure = { "2023-10-03": [{ name: "José" }] };

if ("2023-10-03" in structure) {
  structure["2023-10-03"].push({ name: "Carlos" });
} else {
  structure["2023-10-03"] = [{ name: "Alicia" }];
}

console.log(structure);
//-------------------------------------------------------------------------------------------------------------

const structure2 = [];

if ("2023-10-03" in structure2) {
  structure2["2023-10-03"].push({ name: "Carlos" });
} else {
  structure2["2023-10-03"] = [{ name: "Alicia" }];
}

if ("2023-10-03" in structure2) {
  structure2["2023-10-03"].push({ name: "Carlos" });
} else {
  structure2["2023-10-03"] = [{ name: "Alicia" }];
}

if ("2023-10-02" in structure2) {
  structure2["2023-10-03"].push({ name: "Carlos" });
} else {
  structure2["2022-10-03"] = [{ name: "Alicia" }];
}

console.log(structure2);

console.log(structure2.reverse());
//-------------------------------------------------------------------------------------------------------------

const structure3 = [{ "2023-10-03": [] }, { "2023-10-02": [] }];



    toggle = true
    structure3.forEach((element)=>{
        if("2023-10-02" in element){
            toggle = true;
        }
    })


if (toggle) {
  structure3[0]["2023-10-03"].push({ name: "Alicia" });
} else {
  structure3.push({"2023-10-03":[{ name: "Alicia" }]});
}

console.log(structure3);

console.log(structure3.reverse());
