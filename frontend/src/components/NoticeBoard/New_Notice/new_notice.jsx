import React from "react";
import "./new_notice.css"

const NewNotice = () => {
    return (
        <div className="new-notice-body">
            <div className="new-notice-main">
                {/* <h3 className="new-notice-header">Create New Notice</h3> */}
                <div className="new-notice">
                    <div className="sub-new-notice">
                        <label htmlFor="">Title/Subject:</label><br />
                        <input type="text" placeholder="Enter the subject of your notice"/>
                    </div>

                    <div className="sub-new-notice">
                        <label htmlFor="">To:</label><br />
                        <select name="" id="">
                            <option value="">Mark</option>
                            <option value="">Steve</option>
                            <option value="">James</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNotice