import React, { Component, Fragment } from "react";

class ModeEmploi extends Component {
  render() {
    return (
      <Fragment>
        <div className="modal-dialog modal-lg">
          <div className="modal-content mode-emploi">
            <h5>Bienvenue sur Lyssna</h5>
            <hr />
            <br />
            <ul>
              <li>
                <i className="lni-user" />
                &nbsp;&nbsp; Inscrivez-vous gratuitement dans l'application en
                cliquant sur l'onglet "S'inscrire" ou connectez vous avec vos
                identifiants en cliquant sur l'onglet "Se connecter", puis
                accéder à la section Catégories depuis la page d'accueil.
              </li>
              <br />
              <li>
                <i className="lni-library" />
                &nbsp;&nbsp; Dans la section Catégories, parcourez les
                différentes thématiques et accédez à nos nombreuses playlists et
                collections de podcasts.
              </li>
              <br />
              <li>
                <i className="lni-heart" />
                &nbsp;&nbsp; Un coup de coeur sur une écoute ? Vous pouvez
                choisir de télécharger l'épisode ou de l'ajouter à votre
                playlist en cliquant sur l'onglet "Ajouter à ma playlist".
              </li>
              <br />
              <li>
                <i className="lni-list" />
                &nbsp;&nbsp; En cliquant sur l'onglet "Ma playlist" dans le menu
                vous pouvez consulter votre playlist à tout moment pour
                réécouter ou supprimer les épisodes de votre choix.
              </li>
              <br />
              <li>
                <i className="lni-comment-reply" />
                &nbsp;&nbsp; Pour consulter les avis et interéagir à l'écoute
                d'un épisode, cliquez sur l'onglet "Avis" puis cliquez sur
                l'onglet "Interéagir". Donnez une note de 0 à 5 et inscrivez vos
                commentaires.
              </li>
            </ul>
            <br />
            <button
              type="button"
              className="btn btn-border page-scroll"
              data-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ModeEmploi;
