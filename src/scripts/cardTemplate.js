function cardTemplate(item) {
  const totalVotes = item.results.reduce((sum, { votes }) => sum + votes, 0);

  const sortedResults = [...item.results].sort((a, b) => b.votes - a.votes);

  return `
    <div class="results-card">
      <h2>${item.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Party</th>
            <th>Candidate</th>
            <th>Votes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${sortedResults
            .map((candidate) => {
              const percent = `${Math.round(
                (candidate.votes / totalVotes) * 100
              )}%`;

              return `
                <tr 
                  style="--party-color: var(--party-${candidate.partyCode.toLowerCase()})" 
                  class="${candidate.isElected ? 'winner' : ''}"
                >
                  <td>${candidate.partyCode}</td>
                  <td>${candidate.name}</td>
                  <td>${candidate.votes.toLocaleString()}</td>
                  <td class="bar" style="--percent: ${percent};">
                    <span>${percent}</span>
                  </td>
                </tr>`;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

export default cardTemplate;
