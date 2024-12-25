"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import forge from 'node-forge';


// https://pastebin.com/raw/4DWM4yBF
// node-forge hi use karte hain achha result de raha h check kar liya mne

// https://pastebin.com/raw/SVe15n79
// client side ke liye

// https://api.ahimsapure.com//api/v1/files/applicationpublickey
// get the application public key

// https://api.ahimsapure.com//api/v1/auth/register
// https://api.ahimsapure.com//api/v1/auth/login
// sab kaam kar raha h

// https://pastebin.com/raw/hYwQ57Py
// isme login and signup dono hai



export default function Register() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const [formData, setformData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [publicKey, setpublicKey] = useState();

  const handleChange = (e) => {
    // e.preventDefault()

    // setformData(() {...formData , [e.target.name]: e.target.value})
    setformData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  //componentdidmount
  useEffect(() => {
    fetchPublicKey();
  }, []);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  //API CALL
  const onRegister = async () => {
    try {

     
      console.log("subm", formData);
      // console.log("encryptData",  encryptData(formData,publicKey));
      register(encryptData(formData,publicKey))
    } catch (error) {
      console.log(error.message);
    }
  };


  //functions
  const fetchPublicKey = async () => {
    // const response = await fetch("https://your-server-url/get_public_key.php");
    const response = await fetch("https://api.ahimsapure.com//api/v1/files/applicationpublickey").then(response => {
      if (response.ok) {return response.text();}
      throw new Error('Network response was not ok');
    })
    console.log("response",response);
    setpublicKey(response);



        // Convert the PEM formatted public key to an RSA public key object
        const rsa = forge.pki.publicKeyFromPem(response);

        // Example: The message you want to encrypt
        const message = "Hello, this is a secret message!";
    
        // Encrypt the message using the public key
        const encrypted = rsa.encrypt(message);
    
        // Convert the encrypted message to a base64 string (you can store or send this)
        const encryptedBase64 = forge.util.encode64(encrypted);
    
        // Log the encrypted message
        console.log("Encrypted Message (Base64):", encryptedBase64);



    return response;
};
 const encryptData = async(data, publicKeyPem)=>{
  try {
      // Convert data to string
      const dataString = JSON.stringify(data);
      console.log('Data to encrypt:', dataString);
      
      // Create public key from PEM
      const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
      
      // Encrypt data
      const buffer = forge.util.createBuffer(dataString, 'utf8');
      const encrypted = publicKey.encrypt(buffer.getBytes(), 'RSAES-PKCS1-V1_5');
      
      // Convert to base64
      return forge.util.encode64(encrypted);
  } catch (error) {
      console.error('Encryption error:', error);
  }
}

 const register = async (encryptedData) => {
  try {
    console.log("registerfn encpt dt",encryptedData)
    // Send registration request
    const response = await axios.post(`https://api.ahimsapure.com//api/v1/auth/register`, {
        payload: encryptedData
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log('Registration response:', response.data);
} catch (error) {
    console.error('Error:', error.response?.data || error.message);
}
 }
  //functions----end

  return (
    <>
      {/* <div className="w-full min-h-screen justify-center flex items-center">
      <div className="text-black bg-purple-300 rounded-md p-5">Rigister</div>
    </div> */}

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
        {/* <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] z-10"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Register
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Sign up to Ahimsapure
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  value={formData?.firstName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  id="first_name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
              <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData?.lastName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData?.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formData.password}
                  id="password"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div> 

          <div className="mt-10">
            <button
              type="submit"
              onClick={(e) => {
                onRegister(e);
              }}
              className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
            Already registered?{' '}
            <a href="/login" className="font-semibold leading-6 text-emerald-400 hover:text-indigo-500">
              Sign in
            </a>
          </p>
      </div>
    </>
  );
}
