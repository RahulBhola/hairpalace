import React,{useState} from 'react'
import Title from './Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  // const handleSend = (e) => {
  const sendEmail = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      const templateParams = {
        from_name: username,
        from_email: email,
        from_contact: phoneNumber,
        is_subject: subject,
        message: message,
      };
      emailjs.send('service_arh8zol', 'template_t0vaaod', templateParams, 'VjyZ53rmx4QfQHBAC')
        .then((result) => {
            console.log(result.text);
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }, (error) => {
            console.log(error.text);
        });
      }
      // Clear messages after 5000 milliseconds (5 seconds)
      setTimeout(() => {
      setErrMsg("");
      setSuccessMsg("");
    }, 5000);
  };
  return (
    <div className="w-full h-auto bg-slate-950 text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="contact"
          className="w-full py-12 lgl:py-20 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="CONTACT" des="Contact With Us" />
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row md:justify-between">
              <ContactLeft />
              <div className="w-full lgl:w-[60%] h-full py-12 bg-fuchsia-950 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
                <form onSubmit={sendEmail} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" >
                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}
                  <div className="w-full flex flex-col lgl:flex-row gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gol uppercase tracking-wide">
                        Your name
                      </p>
                      <input

                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className={`${
                          errMsg === "Username is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gol uppercase tracking-wide">
                        Phone Number
                      </p>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        className={`${
                          errMsg === "Phone number is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gol uppercase tracking-wide">
                      Email
                    </p>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className={`${
                        errMsg === "Please give your Email!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gol uppercase tracking-wide">
                      Subject
                    </p>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      className={`${
                        errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gol uppercase tracking-wide">
                      Message
                    </p>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className={`${
                        errMsg === "Message is required!" && "outline-designColor"
                      } contactTextArea`}
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button
                      className="w-full h-16 bg-black rounded-lg text-base text-gol tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                    >
                      Send Message
                    </button>
                  </div>
                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;