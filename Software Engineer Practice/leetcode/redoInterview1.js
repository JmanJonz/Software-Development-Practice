// counts number of increasing paths in a given grid
    function countIncreasingPaths(grid){
        const n = grid.length;
        const m = grid[0].length;
        // an empty grid that tracks the # of increasing paths at each cell
        // a cell can have as little as 0 increasing paths and a max of 4
            const dp = new Array(m).fill(new Array(n).fill(0));

         // Initialize the base case: there is one increasing path ending at the top-left cell
            dp[0][0] = 1;
        // set increasing paths counter
            let iPathCounter = 0;
        // iterate over the whole grid moving rightward and downward
            for(let i = 0; i < m; i += 1){
                for(let j = 0; j < n; j +=1){
                    const currentItem = grid[i][j];
                    // init the number of increasing paths counter for that cell
                        let numPaths = 0;
                    // check cell above if there is one
                        if(i > 0 && currentItem > grid[i - 1][j]){
                            // Add the number of increasing paths ending at the cell above
                                numPaths += dp[i - 1][j];
                            // Add the number of increasing paths ending at the cell below if there is on

                            // Add the number of increasing paths ending at the cell to the right if there is on
                            
                            // Add the number of increasing paths ending at the cell to the left if there is on

                        }
                }
            }

    }

    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    countIncreasingPaths(grid);