import React, { useState } from 'react'

const Table = () => {
    const data = [
        {
            "id": 1,
            "Title": "SQL Basics To Advanced Mastery Course",
            "Start Date": "20 Jul 2024",
            "End Date": "28 Jul 2024",
            "Price": "₹ 0",
            "Validity/Expiry": "180 days",
            "Status": "Published",
            "imageUrl": "/table1.png"
        },
        {
            "id": 2,
            "Title": "30 Days Of Javascript Challenge",
            "Start Date": "13 Jul 2024",
            "End Date": "12 Aug 2024",
            "Price": "₹ 0",
            "Validity/Expiry": "33 days",
            "Status": "Unpublished",
            "imageUrl": "/table2.png"
        },
        {
            "id": 3,
            "Title": "Interview Preparation With Javascript 2.0",
            "Start Date": "02 Aug 2024",
            "End Date": "15 Sep 2024",
            "Price": "₹ 10,000",
            "Validity/Expiry": "365 days",
            "Status": "Published",
            "imageUrl": "/table3.png"
        },
        {
            "id": 4,
            "Title": "Python for Data Science",
            "Start Date": "01 Sep 2024",
            "End Date": "30 Sep 2024",
            "Price": "₹ 5,000",
            "Validity/Expiry": "90 days",
            "Status": "Published",
            "imageUrl": "/table1.png"
        },
        {
            "id": 5,
            "Title": "Web Development Bootcamp",
            "Start Date": "15 Aug 2024",
            "End Date": "30 Nov 2024",
            "Price": "₹ 15,000",
            "Validity/Expiry": "365 days",
            "Status": "Unpublished",
            "imageUrl": "/table2.png"
        },
        {
            "id": 6,
            "Title": "Machine Learning A-Z",
            "Start Date": "10 Jul 2024",
            "End Date": "10 Aug 2024",
            "Price": "₹ 12,000",
            "Validity/Expiry": "180 days",
            "Status": "Published",
            "imageUrl": "/table3.png"
        },
        {
            "id": 7,
            "Title": "React Native Development",
            "Start Date": "20 Aug 2024",
            "End Date": "20 Sep 2024",
            "Price": "₹ 8,000",
            "Validity/Expiry": "180 days",
            "Status": "Published",
            "imageUrl": "/table1.png"
        },
        {
            "id": 8,
            "Title": "Full Stack Developer Course",
            "Start Date": "01 Oct 2024",
            "End Date": "31 Dec 2024",
            "Price": "₹ 20,000",
            "Validity/Expiry": "365 days",
            "Status": "Unpublished",
            "imageUrl": "/table2.png"
        },
        {
            "id": 9,
            "Title": "Advanced CSS and Sass",
            "Start Date": "05 Aug 2024",
            "End Date": "20 Aug 2024",
            "Price": "₹ 3,000",
            "Validity/Expiry": "90 days",
            "Status": "Published",
            "imageUrl": "/table3.png"
        },
        {
            "id": 10,
            "Title": "Docker for Beginners",
            "Start Date": "25 Jul 2024",
            "End Date": "15 Aug 2024",
            "Price": "₹ 4,000",
            "Validity/Expiry": "180 days",
            "Status": "Unpublished",
            "imageUrl": "/table1.png"
        },
        {
            "id": 11,
            "Title": "Node.js and Express.js",
            "Start Date": "05 Sep 2024",
            "End Date": "25 Sep 2024",
            "Price": "₹ 7,000",
            "Validity/Expiry": "180 days",
            "Status": "Published",
            "imageUrl": "/table2.png"
        },
        {
            "id": 12,
            "Title": "Kubernetes Mastery",
            "Start Date": "10 Oct 2024",
            "End Date": "10 Nov 2024",
            "Price": "₹ 10,000",
            "Validity/Expiry": "365 days",
            "Status": "Published",
            "imageUrl": "/table3.png"
        }
    ]

    const [tableData, setTableData] = useState(data)
    const [rowsPerPage, setRowsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value))
        setCurrentPage(0) // Reset to first page when rows per page changes
    }

    const handleNextPage = () => {
        if (currentPage < Math.ceil(tableData.length / rowsPerPage) - 1) {
            setCurrentPage((prev)=>(prev+1))
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prev)=>(prev+1))
        }
    }

    const currentData = tableData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)

    return (
        <>
            <div className='flex justify-center items-start h-screen w-full'>
                <div className="bg-white w-[70%] h-fit p-5 rounded-md">
                    <h1 className='font-inter font-[700] text-4xl'>Batches</h1>
                    <p className='font-inter font-[400] text-xl text-[#4B4747]'>Create learner’s batch and share information at the same time.</p>
                    <div className='mt-6 flex gap-3'>
                        <input type="text" name="search" id="search" className='border border-[#BEBEBE] text-[#C8C7C7] rounded w-80 p-2' placeholder='Search by Title...' />
                        <button className='bg-[#6C6BAF] py-2 px-3 rounded text-white'>Search</button>
                    </div>
                    <div className='border-[#7D7D7D] border-2 rounded-xl overflow-x-scroll overflow-y-hidden mt-5 hide-scrollbar'>
                        <table className='w-full text-center p-10'>
                            <thead className='bg-[#F2F2F2] text-black'>
                                <tr>
                                    <th className='border-r-2 border-[#7D7D7D] text-start px-5 py-3 font-inter font-[700]'>Title</th>
                                    <th className='border-l-2 border-r-2 border-[#7D7D7D] py-3'>Start Date</th>
                                    <th className='border-l-2 border-r-2 border-[#7D7D7D] py-3'>End Date</th>
                                    <th className='border-l-2 border-r-2 border-[#7D7D7D] py-3'>Price</th>
                                    <th className='border-l-2 border-r-2 border-[#7D7D7D] py-3'>Validity/Expiry</th>
                                    <th className='border-l-2 border-[#7D7D7D] py-3'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentData.map((value) => (
                                        <tr key={value.id}>
                                            <td className='flex gap-3 items-center px-4 py-3 min-w-80'>
                                                <img src={value.imageUrl} alt="" className='object-cover' />
                                                <p className='text-start'>{value.Title}</p>
                                            </td>
                                            <td className='py-3 border-l-2 border-r-2 border-[#7D7D7D] min-w-32'>{value['Start Date']}</td>
                                            <td className='py-3 border-l-2 border-r-2 border-[#7D7D7D] min-w-32'>{value['End Date']}</td>
                                            <td className='py-3 border-l-2 border-r-2 border-[#7D7D7D] min-w-32'>{value.Price}</td>
                                            <td className='py-3 border-l-2 border-r-2 border-[#7D7D7D] min-w-32'>{value['Validity/Expiry']}</td>
                                            <td className='py-3 border-l-2 border-[#7D7D7D] min-w-36'><div className={`mx-3 py-1 text-center text-[#4B4747] text-sm rounded ${value.Status === 'Published' ? 'bg-green-200 border-[#4ED04B] border' : 'bg-gray-200 border-[#A4A4A4] border'}`}>
                                                {value.Status}
                                            </div></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-end gap-3 items-center mt-4'>
                        <div className='flex items-center'>
                            <label htmlFor="rowsPerPage" className='mr-2'>Rows per page:</label>
                            <select id="rowsPerPage" className='border-2 outline-none' value={rowsPerPage} onChange={handleRowsPerPageChange}>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className='flex gap-3'>
                            <button onClick={handlePrevPage} disabled={currentPage === 0} className={`py-2 px-3 rounded text-white`}>
                                <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3426 26.1497C16.7637 26.574 17 27.147 17 27.7441C17 28.3412 16.7637 28.9142 16.3426 29.3385C16.1358 29.548 15.8892 29.7144 15.6173 29.828C15.3455 29.9415 15.0537 30 14.7589 30C14.4642 30 14.1724 29.9415 13.9005 29.828C13.6286 29.7144 13.3821 29.548 13.1753 29.3385L0.656395 16.5961C0.235807 16.1708 0 15.5974 0 15C0 14.4026 0.235807 13.8292 0.656395 13.4039L13.1753 0.661457C13.3821 0.451963 13.6286 0.285596 13.9005 0.172038C14.1724 0.0584801 14.4642 0 14.7589 0C15.0537 0 15.3455 0.0584801 15.6173 0.172038C15.8892 0.285596 16.1358 0.451963 16.3426 0.661457C16.7637 1.08577 17 1.65877 17 2.2559C17 2.85302 16.7637 3.42602 16.3426 3.85034L6.07579 15.0049L16.3426 26.1497Z" fill={currentPage === 0 ? '#D6D6D6' : 'black'} />
                                </svg>
                            </button>
                            <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(tableData.length / rowsPerPage) - 1} className={`py-2 px-3 rounded text-white`}>
                                <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.657432 3.85033C0.236262 3.42602 0 2.85302 0 2.2559C0 1.65877 0.236262 1.08577 0.657432 0.661457C0.86425 0.451963 1.11077 0.285593 1.38265 0.172035C1.65453 0.0584774 1.94634 0 2.24109 0C2.53583 0 2.82764 0.0584774 3.09952 0.172035C3.3714 0.285593 3.61792 0.451963 3.82474 0.661457L16.3436 13.4039C16.7642 13.8292 17 14.4026 17 15C17 15.5974 16.7642 16.1708 16.3436 16.5961L3.82474 29.3385C3.61792 29.548 3.3714 29.7144 3.09952 29.828C2.82764 29.9415 2.53583 30 2.24109 30C1.94634 30 1.65453 29.9415 1.38265 29.828C1.11077 29.7144 0.86425 29.548 0.657432 29.3385C0.236262 28.9142 0 28.3412 0 27.7441C0 27.147 0.236262 26.574 0.657432 26.1497L10.9242 14.9951L0.657432 3.85033Z" fill={currentPage >= Math.ceil(tableData.length / rowsPerPage) - 1 ? '#D6D6D6' : 'black'} />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
