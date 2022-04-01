import React, { useState } from 'react';
import { motion } from 'framer-motion';
function AddAcount() {
  const [name, setName] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [group, setGroup] = useState('plc');
  const [text, setText] = useState(' ');

  const handleSubmit = async (e) => {
    const customer = { name, password, group,text };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    };
    fetch("/accounts/add", options);
  }

  return (
    <motion.div className="AddAcount" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="container loginWrap">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <main className="form-signin">
              <form onSubmit={handleSubmit}>
                <div className="form-floating">
                  <input required type="text" autoComplete="on" className="form-control" onChange={(e) => setName(e.target.value)} />
                  <label>Prihlasovacie meno</label>
                </div>
                <label>Skupina zamestnancov:</label>
                <div className="form-floating selectGroup">
                  <select required className="form-select" aria-label="Default select example" onChange={(e) => setGroup(e.target.value)} >
                    <option value="plc">PLC programátori</option>
                    <option value="konstrukteri">Konštruktéri</option>
                    <option value="ekonomky">Ekonómky</option>
                    <option value="brigadnici">Brigádnici</option>
                  </select>
                </div>
                <div className="form-floating">
                  <input required type="password" autoComplete="on" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                  <label>Heslo</label>
                </div>

                <div className="form">
                  <label>Popis</label>
                  <textarea className="form-control" rows="3" onChange={(e) => setText(e.target.value)} ></textarea>
                  
                </div>
                <label>Potvrďte tlačidlom pridať</label>
                <button className="w-100 btn btn-lg btn-danger" type="submit">Pridať na server</button>
              </form>
            </main>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default AddAcount;