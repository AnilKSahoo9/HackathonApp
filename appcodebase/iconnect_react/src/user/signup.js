import React, { useState } from "react";
import Backendless from "../backendless/Credentials";
import { useHistory } from "react-router-dom";
import "./signup.css";
import Iconnectlogo from "../assets/images/Iconnectlogo.png";

const Signup = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleInput = (event) => {
    console.log(event.target.name, event.target.value);
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignup = (event) => {
    // var user = new Backendless.User();
    // user.email = "backendlessdeveloper@backedless.com";
    // user.password = "password";
    event.preventDefault();
    console.log(userData);
    Backendless.UserService.register(userData)
      .then(function (registeredUser) {
        console.log(registeredUser);
        alert("Registration successfull & Confirmation mail sent");
        history.push("/signin");
      })
      .catch(function (error) {
        console.log(error);
      });
    // Backendless.Data.of("demo")
    //   .find()
    //   .then(function (result) {
    //     if (
    //       result.find(
    //         (item) =>
    //           item.email === userData.email &&
    //           item.password === userData.password
    //       )
    //     )
    //       alert("success");
    //     console.log(result);
    //   })
    //   .catch(function (error) {});
  };
  return (
    <div id="Create_account">
      <div>
        <img
          src={Iconnectlogo}
          alt="LOGO"
          style={{ margin: "50px 100px 50px 100px" }}
        />
        {/* <div id="link_m">
          <div id="Group_398_m">
            <div id="Group_397_m">
              <svg class="Path_97_m" viewBox="0.039 164.614 31.448 33.896">
                <path
                  id="Path_97_m"
                  d="M 30.51486396789551 168.0267944335938 C 29.92312431335449 167.4315185546875 29.26700973510742 166.9038848876953 28.55869674682617 166.4535064697266 C 26.68262481689453 165.2521820068359 24.50160789489746 164.6138153076172 22.27386665344238 164.6138153076172 C 19.18183326721191 164.6080474853516 16.21544647216797 165.8366088867188 14.03286933898926 168.0267944335938 L 3.444438457489014 178.6234893798828 C 1.265568852424622 180.8065948486328 0.04093018174171448 183.7643890380859 0.03897913545370102 186.8486938476562 C 0.03488205373287201 193.2850341796875 5.249107837677002 198.5059814453125 11.6854362487793 198.5100708007812 C 14.77268886566162 198.5208129882812 17.7363452911377 197.2981262207031 19.91814041137695 195.1138000488281 L 28.65859031677246 186.3733367919922 C 28.81740188598633 186.2158813476562 28.90607452392578 186.0010986328125 28.90480422973633 185.7774963378906 C 28.90217018127441 185.3177642822266 28.52728843688965 184.9472503662109 28.06753540039062 184.9498901367188 L 27.73460006713867 184.9498901367188 C 25.90846824645996 184.9563293457031 24.09863090515137 184.6056213378906 22.40711975097656 183.9177398681641 C 22.0954475402832 183.7894592285156 21.73724365234375 183.8618316650391 21.49981117248535 184.100830078125 L 15.21497821807861 190.3939514160156 C 13.26340007781982 192.3455505371094 10.09927654266357 192.3455505371094 8.147698402404785 190.3939514160156 C 6.196118831634521 188.4423522949219 6.196118831634521 185.2782440185547 8.147698402404785 183.32666015625 L 18.77778434753418 172.7049865722656 C 20.72780418395996 170.7573852539062 23.88675308227539 170.7573852539062 25.83677101135254 172.7049865722656 C 27.15096092224121 173.9418029785156 29.20087051391602 173.9418029785156 30.51496124267578 172.7049865722656 C 31.08036041259766 172.1390991210938 31.42314720153809 171.3885345458984 31.48060417175293 170.590576171875 C 31.54137992858887 169.6370239257812 31.18971252441406 168.7031860351562 30.51486396789551 168.0267944335938 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div id="Group_400_m">
            <div id="Group_399_m">
              <svg class="Path_98_m" viewBox="189.502 0 31.465 33.897">
                <path
                  id="Path_98_m"
                  d="M 217.5528869628906 3.413779735565186 C 213.0015258789062 -1.137595891952515 205.6222534179688 -1.137595891952515 201.0708923339844 3.413779735565186 L 192.3387145996094 12.13755035400391 C 192.0989685058594 12.37849712371826 192.02978515625 12.74089431762695 192.1639099121094 13.05324840545654 C 192.2964782714844 13.36648082733154 192.6062927246094 13.56753158569336 192.9463500976562 13.56099510192871 L 193.2543334960938 13.56099510192871 C 195.0783081054688 13.55767822265625 196.8852233886719 13.91110229492188 198.5735168457031 14.60155868530273 C 198.8851928710938 14.72983551025391 199.243408203125 14.6574535369873 199.4808044433594 14.41845798492432 L 205.7489929199219 8.158596992492676 C 207.7005615234375 6.207017421722412 210.8646850585938 6.207017421722412 212.8162536621094 8.158596992492676 C 214.767822265625 10.1101770401001 214.767822265625 13.27429866790771 212.8162536621094 15.22587490081787 L 205.0080871582031 23.02565765380859 L 204.9414672851562 23.10057640075684 L 202.2111511230469 25.81431198120117 C 200.2611389160156 27.76188850402832 197.1021728515625 27.76188850402832 195.1521606445312 25.81431198120117 C 193.8379821777344 24.57747650146484 191.7880554199219 24.57747650146484 190.4739685058594 25.81431198120117 C 189.9049682617188 26.38448905944824 189.5618896484375 27.14157104492188 189.50830078125 27.94528198242188 C 189.4474487304688 28.89883041381836 189.7991027832031 29.83267402648926 190.4739685058594 30.50918197631836 C 191.4374694824219 31.47677803039551 192.5647583007812 32.26585388183594 193.8036193847656 32.83993530273438 C 193.9784240722656 32.92314529418945 194.1532592773438 32.98977279663086 194.3280639648438 33.06468963623047 C 194.5028381347656 33.13960647583008 194.6859741210938 33.19784545898438 194.8607482910156 33.26446914672852 C 195.0355834960938 33.33110046386719 195.2186889648438 33.38933563232422 195.3934936523438 33.43928146362305 L 195.8846435546875 33.57243728637695 C 196.2175903320312 33.65564346313477 196.5506286621094 33.72227096557617 196.891845703125 33.78050231933594 C 197.3029174804688 33.84157180786133 197.7169189453125 33.8804931640625 198.1322021484375 33.89707946777344 L 198.7148742675781 33.89707946777344 L 198.7648010253906 33.89707946777344 L 199.2642517089844 33.83884429931641 C 199.4473876953125 33.8305549621582 199.6388549804688 33.78890228271484 199.8553161621094 33.78890228271484 L 200.1383056640625 33.78890228271484 L 200.7126770019531 33.7056884765625 L 200.9790954589844 33.65574264526367 L 201.4618835449219 33.55585479736328 L 201.553466796875 33.55585479736328 C 203.5982055664062 33.04225540161133 205.4653015136719 31.98354911804199 206.9558410644531 30.49250221252441 L 217.5525817871094 19.89577865600586 C 222.104248046875 15.34440040588379 222.104248046875 7.965156078338623 217.5528869628906 3.413779735565186 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h2>iConnect</h2>
        </div> */}
      </div>
      <div id="Create_account_nf">
        <span>Create account</span>
      </div>
      <form>
        <div
          id="Light__Text_fields2_Outlined_6_na"
          class="Light_____Text_fields_2__Outlined___6_States_"
        >
          {/* <svg class="_Container_l_Color_nb">
          <rect
            id="_Container_l_Color_nb"
            rx="4"
            ry="4"
            x="0"
            y="0"
            width="290"
            height="56"
          ></rect>
        </svg> */}
          <div id="Top_label_nc">
            {/* <svg class="top_border_with_background_col_nd">
            <rect
              id="top_border_with_background_col_nd"
              rx="0"
              ry="0"
              x="0"
              y="0"
              width="83"
              height="4"
            ></rect>
          </svg>
          <div id="_Label_ne">
            <span>Screen Name</span>
          </div> */}
            <input
              type="name"
              class="form-control"
              id="top_border_with_background_col_nd"
              aria-describedby="name"
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
            />
          </div>
        </div>

        <div
          id="Light__Text_fields2_Outlined_6_md"
          class="Light_____Text_fields_2__Outlined___6_States_"
        >
          {/* <svg class="_Container_l_Color_me">
          <rect
            id="_Container_l_Color_me"
            rx="4"
            ry="4"
            x="0"
            y="0"
            width="290"
            height="56"
          ></rect>
        </svg> */}
          <div id="Top_label_mf">
            <input
              type="email"
              class="form-control"
              id="top_border_with_background_col_mg"
              aria-describedby="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
            {/* <input
            type="name"
            class="form-control"
            id="top_border_with_background_col_mg"
            aria-describedby="name"
            placeholder="Enter Name"
            name="name"
            onChange={handleInput}
          /> */}
            {/* <svg class="top_border_with_background_col_mg">
            <rect
              id="top_border_with_background_col_mg"
              rx="0"
              ry="0"
              x="0"
              y="0"
              width="38"
              height="4"
            ></rect>
          </svg> */}
            {/* <div id="_Label_mh">
            <span>Email</span>
          </div> */}
          </div>
        </div>
        <div
          id="Light__Text_fields2_Outlined_6_mi"
          class="Light_____Text_fields_2__Outlined___6_States_"
        >
          {/* <svg class="_Container_l_Color_mj">
          <rect
            id="_Container_l_Color_mj"
            rx="4"
            ry="4"
            x="0"
            y="0"
            width="290"
            height="56"
          ></rect>
        </svg> */}
          <div id="Top_label_mk">
            <input
              type="password"
              class="form-control"
              id="top_border_with_background_col_ml"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            {/* <svg class="top_border_with_background_col_ml">
            <rect
              id="top_border_with_background_col_ml"
              rx="0"
              ry="0"
              x="0"
              y="0"
              width="63"
              height="4"
            ></rect>
          </svg>
          <div id="_Label_mm">
            <span>Password</span>
          </div> */}
          </div>
          <div id="Trailing_icon_mn" class="Trailing_icon">
            <svg class="Boundary_mo">
              <rect
                id="Boundary_mo"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="24"
                height="24"
              ></rect>
            </svg>
            <svg class="_Color_mp" viewBox="0 0 25 20">
              <path
                id="_Color_mp"
                d="M 10.99979972839355 15.00030040740967 C 8.580410003662109 15.00030040740967 6.254580020904541 14.27276039123535 4.273760318756104 12.89632034301758 C 2.339249849319458 11.55207061767578 0.8614100217819214 9.68595027923584 0 7.499700546264648 C 0.8615800142288208 5.313470840454102 2.339420080184937 3.447880268096924 4.273760318756104 2.103860139846802 C 6.254650115966797 0.7275002598762512 8.580470085144043 2.384185791015625e-07 10.99979972839355 2.384185791015625e-07 C 13.41945934295654 2.384185791015625e-07 15.74539947509766 0.7275002598762512 17.72617149353027 2.103860139846802 C 19.66039085388184 3.447870254516602 21.13812065124512 5.313720703125 21.99960136413574 7.499700546264648 C 21.13801002502441 9.686400413513184 19.6602897644043 11.55226993560791 17.72617149353027 12.89632034301758 C 15.74547004699707 14.27276039123535 13.41951942443848 15.00030040740967 10.99979972839355 15.00030040740967 Z M 10.99979972839355 2.500200271606445 C 8.243069648742676 2.500200271606445 6.000300407409668 4.74297046661377 6.000300407409668 7.499700546264648 C 6.000300407409668 10.25693035125732 8.243069648742676 12.50010013580322 10.99979972839355 12.50010013580322 C 13.75702953338623 12.50010013580322 16.00020027160645 10.25693035125732 16.00020027160645 7.499700546264648 C 16.00020027160645 4.74297046661377 13.75702953338623 2.500200271606445 10.99979972839355 2.500200271606445 Z M 10.99979972839355 10.50030040740967 C 9.345759391784668 10.50030040740967 8.000100135803223 9.154240608215332 8.000100135803223 7.499700546264648 C 8.000100135803223 5.845660209655762 9.345759391784668 4.5 10.99979972839355 4.5 C 12.65433979034424 4.5 14.00039958953857 5.845660209655762 14.00039958953857 7.499700546264648 C 14.00039958953857 9.154240608215332 12.65433979034424 10.50030040740967 10.99979972839355 10.50030040740967 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div style={{ left: "90px", top: "350px" }}>
          {/* <svg class="Rectangle_21">
            <rect
              id="Rectangle_21"
              rx="4"
              ry="4"
              x="0"
              y="0"
              width="16"
              height="16"
            ></rect>
          </svg> */}
          <div class="Rectangle_21">
            <input
              type="checkbox"
              id="Rectangle_21"
              name="vehicle1"
              value="Bike"
            />
          </div>
          <div id="I_agree_with_our_terms_and_Con">
            <span>I agree with our terms and Conditions</span>
          </div>
        </div>
        <div id="Group_396_mq">
          <div id="Light_Elevation00dp_mr" class="Light____Elevation_00dp">
            <div id="Shadow_ms">
              <svg class="Rectangle_mv">
                <rect
                  id="Rectangle_mv"
                  rx="21.5"
                  ry="21.5"
                  x="0"
                  y="0"
                  width="193"
                  height="43"
                ></rect>
              </svg>
              <svg class="Rectangle_mv">
                <rect
                  id="Rectangle_mv"
                  rx="21.5"
                  ry="21.5"
                  x="0"
                  y="0"
                  width="193"
                  height="43"
                ></rect>
              </svg>
              <svg class="Rectangle_mv">
                <rect
                  id="Rectangle_mv"
                  rx="21.5"
                  ry="21.5"
                  x="0"
                  y="0"
                  width="193"
                  height="43"
                ></rect>
              </svg>
            </div>
          </div>
          <svg class="_FAB_Color_mw">
            <rect
              id="_FAB_Color_mw"
              rx="21.5"
              ry="21.5"
              x="0"
              y="0"
              width="193"
              height="43"
            ></rect>
          </svg>
          <div id="Group_339_mx">
            {/* <img
            id="State_my"
            src="State_my.png"
            srcset="State_my.png 1x, State_my@2x.png 2x"
          ></svg> */}
            <div id="__Label_mz">
              <span
                style={{ fontFamily: "Helvetica Neue" }}
                onClick={handleSignup}
              >
                Sign Up
              </span>
            </div>
          </div>
        </div>
        <div id="Already_have_an_account_Sign_i">
          <span>Already have an account? </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "14px",
              color: "rgba(14,117,121,1)",
            }}
            onClick={() => history.push("/signin")}
          >
            Sign in
          </span>
        </div>
      </form>
    </div>

    // <div className="container m-5 border p-5">
    //   <form>
    //     <div class="form-group">
    //       <label>Name</label>
    //       <input
    //         type="name"
    //         class="form-control"
    //         id="name"
    //         aria-describedby="name"
    //         placeholder="Enter Name"
    //         name="name"
    //         onChange={handleInput}
    //       />
    //     </div>

    //     <div class="form-group">
    //       <label>Email address</label>
    //       <input
    //         type="email"
    //         class="form-control"
    //         id="email"
    //         aria-describedby="email"
    //         placeholder="Enter email"
    //         name="email"
    //         onChange={handleInput}
    //       />
    //     </div>

    //     <div class="form-group">
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         class="form-control"
    //         id="password"
    //         placeholder="Password"
    //         name="password"
    //         onChange={handleInput}
    //       />
    //     </div>

    //     <button
    //       type="button"
    //       className="btn btn-primary mr-1"
    //       onClick={handleSignup}
    //     >
    //       Submit
    //     </button>
    //     <button
    //       type="button"
    //       className="btn btn-default"
    //       onClick={() => history.push("/signin")}
    //     >
    //       I have an <u>Account</u>
    //     </button>
    //   </form>
    // </div>
  );
};

export default Signup;
