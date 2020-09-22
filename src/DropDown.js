import React,{ useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SearchResult from './SearchResult';

const DropDown = () => {
    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(
            data
        )
    }
    return (

        <>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>LINKS</h2>

                    </div>

                </div>
            </section>
            <div className="container py-5">
                <h3>TabPanel Examples</h3>
            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>Four</Tab>
                    <Tab>Five</Tab>
                    <Tab>Six</Tab>
                     
                </TabList>
 
                <TabPanel>
                <div className="TabsPannel">
                    <h3>One</h3>
                    <p>One Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.</p>
                </div>
                </TabPanel>

                <TabPanel>
                <div className="TabsPannel">
                    <h3>Two</h3>
                    <p>Two Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.</p>
                </div>
                </TabPanel>

                <TabPanel>
                <div className="TabsPannel">
                    <h3>Three</h3>
                    <p>Three Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.</p>
                </div>
                </TabPanel>

                <TabPanel>
                <div className="TabsPannel">
                    <h3>Four</h3>
                    <p>Four Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.</p>
                </div>
                </TabPanel>

                <TabPanel>
                <div className="TabsPannel">
                    <h3>Five</h3>
                    <p>Five Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.</p>
                </div>
                </TabPanel>

                <TabPanel>
                <div className="TabsPannel">
                    <h3>Six</h3>
                    <p>Six Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.</p>
                </div>
                </TabPanel>
                 
            </Tabs>
            </div>
             
            <div className="container py-5 text-center">
                <input className="form-control w-50 d-inline-block" type="text" placeholder="Search Images" value={img} onChange={inputEvent} />

            </div>


            {img === "" ? null : <SearchResult name={img} />}
             

        </>
    )
}

export default DropDown;