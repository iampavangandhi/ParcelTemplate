import Profile from "../../public/assets/profile.jpg";

const User = () => {
  const template = `
    <div class="card">
      <img height=250px src="${Profile}" />
      <div class="card-body">
        <h1>Pavan Gandhi</h1>
        <ul>
          <li>pavangandhi100@gmail.com</li>
          <li>91749XXXXX</li>
          <li>New Delhi</li>
        </ul>
      </div>
    </div>
  `;

  return template;
};

export default User;
