import React from "react";

export default function Section6() {
  return (
    <>
    {/*Page 6*/}
      {/* Page 6 - Current IPO GMP */}
      <div id="currentipogmp" className="currentipo-container">
        <div id="header5" className="fw-bold">Current IPO GMP</div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover ipo-table table-wrapper">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>GMP</th>
              <th>Price</th>
              <th>Est. Listing</th>
              <th>IPO Size</th>
              <th>Lot</th>
              <th>Open</th>
              <th>Close</th>
              <th>BOA Date</th>
              <th>Listing</th>
              <th>GMP Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VikramSolar</td>
              <td>₹54</td>
              <td>₹315-332</td>
              <td>₹380</td>
              <td>₹2,079.37 Cr</td>
              <td>45</td>
              <td>19-Aug-2025</td>
              <td>21-Aug-2025</td>
              <td>25-Aug-2025</td>
              <td>27-Aug-2025</td>
              <td>10-Aug-2025</td>
            </tr>
            <tr>
              <td>Gem Aromatics</td>
              <td>₹26</td>
              <td>₹309-325</td>
              <td>₹351</td>
              <td>₹175 Cr</td>
              <td>46</td>
              <td>19-Aug-2025</td>
              <td>21-Aug-2025</td>
              <td>25-Aug-2025</td>
              <td>27-Aug-2025</td>
              <td>10-Aug-2025</td>
            </tr>
            <tr>
              <td>Patel Retail Limited Trust & Togetherness</td>
              <td>₹49</td>
              <td>₹237-255</td>
              <td>₹304</td>
              <td>₹242.76 Cr</td>
              <td>58</td>
              <td>19-Aug-2025</td>
              <td>21-Aug-2025</td>
              <td>25-Aug-2025</td>
              <td>27-Aug-2025</td>
              <td>10-Aug-2025</td>
            </tr>
            <tr>
              <td>ShreeJi Shipping Global Limited</td>
              <td>₹30</td>
              <td>₹240-252</td>
              <td>₹228</td>
              <td>₹1.63 Cr</td>
              <td>58</td>
              <td>19-Aug-2025</td>
              <td>21-Aug-2025</td>
              <td>25-Aug-2025</td>
              <td>27-Aug-2025</td>
              <td>10-Aug-2025</td>
            </tr>
            <tr>
              <td>Jinkushal Industries Limited</td>
              <td>₹35</td>
              <td>₹480-500</td>
              <td>₹550</td>
              <td>₹86.5 lakh</td>
              <td>28</td>
              <td>19-Aug-2025</td>
              <td>21-Aug-2025</td>
              <td>25-Aug-2025</td>
              <td>27-Aug-2025</td>
              <td>10-Aug-2025</td>
            </tr>
            <tr>
              <td>Studio LSD</td>
              <td>₹26</td>
              <td>₹48-51</td>
              <td>₹58</td>
              <td>₹77.25 Cr</td>
              <td>2000</td>
              <td>19-Aug-2025</td>
              <td>21-Aug-2025</td>
              <td>25-Aug-2025</td>
              <td>27-Aug-2025</td>
              <td>10-Aug-2025</td>
            </tr>
          </tbody>
        </table>
        <br />
        </div>
        {/* View More button */}
        <div className="dropdown-center text-center mt-4" id="viewmorebtn">
          <button className="btn btn-dark btn-sm rounded-pill" type="button" data-bs-toggle="dropdown">
            View More &nbsp;<b className="bi bi-chevron-down"></b>
          </button>
        </div>
      

      <div className="disclaimer">
        <b>Disclaimer:</b> “GMP is unofficial & speculative.”
      </div>
      <br /><br />
    </>
  );
}