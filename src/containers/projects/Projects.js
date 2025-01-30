import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  // useEffect(() => {
  //   const getRepoData = () => {
  //     fetch("/profile.json")
  //       .then(result => {
  //         if (result.ok) {
  //           return result.json();
  //         }
  //         throw result;
  //       })
  //       .then(response => {
  //         setrepoFunction(response.data.user.pinnedItems.edges);
  //       })
  //       .catch(function (error) {
  //         console.error(
  //           `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
  //         );
  //         setrepoFunction("Error");
  //       });
  //   };
  //   getRepoData();
  // }, []);

  useEffect(() => {
    const username = "udaysriramchandrasekaran"; // Replace with your GitHub username
    const getRepoData = () => {
      fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=updated`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`GitHub API error: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          console.log("GitHub Repos:", data); // Check the data in the console
          setrepoFunction(data); // Save repo data to state
        })
        .catch(error => {
          console.error(`Error fetching GitHub projects: ${error}`);
          setrepo("Error");
        });
    };
    getRepoData();
  }, []);
  

  // function setrepoFunction(array) {
  //   setrepo(array);
  // }
  // if (
  //   !(typeof repo === "string" || repo instanceof String) &&
  //   openSource.display
  // ) {
  //   return (
  //     <Suspense fallback={renderLoader()}>
  //       <div className="main" id="opensource">
  //         <h1 className="project-title">Open Source Projects</h1>
  //         <div className="repo-cards-div-main">
  //           {repo.map((v, i) => {
  //             if (!v) {
  //               console.error(
  //                 `Github Object for repository number : ${i} is undefined`
  //               );
  //             }
  //             return (
  //               <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
  //             );
  //           })}
  //         </div>
  //         <Button
  //           text={"More Projects"}
  //           className="project-button"
  //           href={socialMediaLinks.github}
  //           newTab={true}
  //         />
  //       </div>
  //     </Suspense>
  //   );
  // } else {
  //   return <FailedLoading />;
  // }
  function setrepoFunction(array) {
    setrepo(array); // Ensure `setRepo` is defined
  }
  
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h2 className="project-title">Open Source Projects</h2>
        <div className="repo-cards-div-main">
        {Array.isArray(repo) && repo.length > 0 ? (
          repo.map((v, i) => {
            if (!v || !v.id) {
              console.error(`Repo at index ${i} is undefined or missing an ID`, v);
              return null;
            }
            console.log("v---------",v)
            return <GithubRepoCard repo={v} key={v.id} isDark={isDark} />;
            // <div key={v.id}>{v.name}</div>; // Render the repository name or other details
          })
        ) : (
          <p>No repositories found.</p>
        )}
         </div>
        <Button
          text="More Projects"
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
      </Suspense>
    );
  } else {
     return <FailedLoading />;; // Return null instead of an empty return statement
  }
  
    
    
}
