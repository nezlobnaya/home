import React from 'react';
import { useFetch } from './hooks';



function Jobs() {

    const jobs = useFetch('https://github-jobs-proxy.appspot.com/positions?description=react&location=new+york', []);

    return (
        <div className='Stories'>
            <h2>Jobzzz</h2>

           { 
               jobs.map(job => { 
                   const { id, company, company_url, description, how_to_apply, title, url, location, created_at } =job;
                   
                    return (
                        <div key={id}>
                         <a href={url}>{title}</a>
                         <div>{company}--
                          <a href={url}>{company_url}</a>
                        </div>
                        <div>{created_at}</div>
                        <div>{location}</div>
                         <div>{description}</div>
                         <div>{how_to_apply}</div>
                        </div>
                    
                )
              })
          }
      </div>
    )
}

export default Jobs;