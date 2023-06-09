function Intro() {
    return (
        <div style={{
            display: 'block', 
            justifyContent: 'flex', 
            backgroundColor: '#f4f4f4', 
            padding: '64px 64px', 
            fontFamily: 'Helvetica', 
            marginRight: '0px', // Assume you want 10px right margin
            lineHeight: '24px' 
        }}>
            <header><h1>What is React?</h1></header>
            <article style={{marginRight: '560px'}}>
                <p>
                    React is a robust, open-source JavaScript library, built by Facebook, 
                    for creating dynamic user interfaces and building single-page applications.
                    Component-Based Architecture: React follows a component-based architecture, 
                    which promotes code reusability and separation of concerns. 
                    This makes the code easier to maintain and understand.
                </p> 
            </article>
            <article style={{marginRight: '560px'}}>
                <h1>
                    React is a robust, open-source JavaScript library, built by Facebook,
                    for creating dynamic user interfaces and building single-page applications.
                    Component-Based Architecture: React follows a component-based architecture,
                    which promotes code reusability and separation of concerns.
                    This makes the code easier to maintain and understand. No?
                </h1>   
            </article> 
        </div>
    );
}

export default Intro;
