import React from 'react';

const Blogs = () => {
    return (
        <div className='pt-32'>
            <h1 className='text-5xl font-bold text-center'>Wlecome to our blogs</h1>
            <div className='grid grid-cols-2 gap-20 py-20 items-center px-20' >
                <div className='dark:bg-gray-800 text-white p-5 rounded-lg shadow-lg'>
                    <h1 className='text-3xl font-bold text-center mb-5'>What is context api?</h1>
                    <p className='text-xl text-justify'>Context API is a new react feature that allows people to share data from one component to another components or across the entire app. we have our choice here whether we want to share the data partially to another components or through the whole app. The context API acts as a global variable we can say. As we mentioned global, it means we can share the variable globally through the whole app. Sharing data from grandparent to parent, then parent to child and so on is so painful matter. Also there's a chance of data leak. So to prevent this props drilling, we can use context API. The Context API can be used to share data with multiple components, without having to pass data through each props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc</p>
                </div>
                <div className='dark:bg-gray-800 text-white p-5 rounded-lg shadow-lg'>
                    <h1 className='text-3xl font-bold text-center mb-5'>What are semantic tags?</h1>
                    <p className='text-xl text-justify'>As the name suggests, semantic tags are those tags that provide meaning to an html page rather than just presentation. It makes html structure more understable by defining each sections seperately of a web page. The pages with semantic elements are much easier to reaad and also helps the serch engines to find the exact part of webpage according to the search. &lt;header&gt;,&lt;nav&gt;,&lt;section&gt;,&lt;article&gt;,&lt;aside&gt;,&lt;footer&gt; tags are example of semantic tags. As we can see all the tag name itself describes what it is for. These tags clearly describes their meaning in a human and machine readable way. Semantic tags were introduced in HTML5 and now its very popular. HTML5 semantic tags define the purpose of the element. By using semantic markup, we help the browser understand the meaning of the content instead of just displaying it.</p>
                </div>
                <div className='dark:bg-gray-800 text-white p-5 rounded-lg shadow-lg'>
                    <h1 className='text-3xl font-bold text-center mb-5'>Difference between inline, block and inline-block elements?</h1>
                    <p className='text-xl text-justify'><b>Inline elements</b> always displays element in line and does not generates new line. Others elements can sit beside inline elements. Height and width property has no effect on inline elements. <br />
                    <b>Inline-block</b> elements displays element inline-level block container. We can set height and width values to inline-block elements. Inline-block elements also doensot generates new line and let other element sit beside it. But as it name suggests it is an inline element but bahaves like bloc element.<br/><b>Block</b> element always display elements in a block. Means it takes the full width of available space does not matter what the size of content is. It always generaes new line for each block elements and any other element can no sit beside block elements. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;