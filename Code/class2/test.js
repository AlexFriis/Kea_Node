function doingSomething(anyFunctionReference, name) {
    // a lot of things can happen here first...
    return anyFunctionReference(name);
   }
    
   const running = name => console.log(`${name} is running`);
    
   // doingSomething(running, "Alexander");
    
   const runningProblems = name =>`${name} is running`;
    
   const result = doingSomething(runningProblems, "Paul");
    
   console.log(result);











   