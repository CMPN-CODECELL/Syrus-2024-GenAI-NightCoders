import React,{useState} from 'react'
import Layout from '../components/Layout.js'
import axios from 'axios';


const DoctorAi = () => {
    const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8001//Doc', { inputText });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <Layout>
        <section className="py-12 ">
            <div className="container px-6 rounded-lg shadow-2xl m-10 p-3">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="mb-12 md:mb-0 md:w-4/12 lg:w-6/12">
                    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Enter your text here..."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>

                    </div>
                    <div className="md:w-8/12 justify-center p-3 lg:ml-2 lg:w-5/12">
                        World
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default DoctorAi