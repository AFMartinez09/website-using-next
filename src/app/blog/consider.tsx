/* 
You could have another navbar for example adminDashboard
or others filters in this section, and they are totally different to the rest of filters

*/
// ! This way is in JS

// const layout = ({children}) => {
//   return (
//     <div>
//       <h2>This is the blog Layout</h2>
//       {children}
//     </div>
//   )
// }

// export default layout

// Using TS I should learn more to how works because I had problems
// I only see two layouts but not data (singleBlog)

// ! This is the way in TS

// const layout = ({children}: {
//   children: {
//     children: string;
//   }
// }) => {
//     return (
//       <div>
//         <h2>This is the blog Layout</h2>
//         {children.children}
//       </div>
//     )
//   }
  
//   export default layout