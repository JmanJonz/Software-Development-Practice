const runOnImport = (name)=>{
    console.log("This ran automatically when imported into a running file");
    console.log(`And you name is ${name} which is passed in as a parameter...`);
};

const notCalledOnExport = (name)=>{
    console.log(`I had to call this but I exported it with a parameter and your name is ${name}`);
};

export default runOnImport("howard");

export {notCalledOnExport};