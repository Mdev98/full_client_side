# Spécifications de l'API du backend du projet

Créer le backend pour une fonctionnalité de commerce électronique ci-dessous doit être entièrement mis en œuvre dans ce projet.

### Des produits
- Lister tous les produits dans la base de données
   * Pagination
   * Sélectionnez des champs spécifiques dans le résultat
   * Limiter le nombre de résultats
   * Filtrer par champs
- Rechercher des produits ou des vendeurs par notes,
- Demander une livraison
  * Utilisez un géocodeur pour obtenir l'emplacement exact et les coordonnées à partir d'un seul champ d'adresse
- Obtenez un seul produit
- Créer un nouveau produit
  * Vendeur authentifié uniquement
  * Validation du terrain via Mongoose
- Télécharger une photo pour le produit
  * Propriétaire seulement
  * La photo sera téléchargée dans la base de données
- Mettre à jour les produits
  * Propriétaire seulement
  * Validation sur mise à jour
- Supprimer le produit
  * Propriétaire seulement
- Calculer la note moyenne du produit

  
### Commentaires
- Répertorier tous les avis pour un vendeur
  * Pagination, filtrage, etc.
- Obtenez un seul avis
- Créer un avis
  * Utilisateurs authentifiés uniquement
  * Doit avoir le rôle "utilisateur" le vendeur ne peut pas s'évaluer
- Revue de mise à jour
  * Propriétaire seulement
- Supprimer l'avis
  * Propriétaire seulement

### Utilisateurs et authentification
- L'authentification se fera à l'aide de JWT/cookies
  * JWT et cookie devraient expirer dans 30 jours
- Enregistrement de l'utilisateur
  * Inscrivez-vous en tant qu'"utilisateur" ou "vendeur"
  * Une fois inscrit, un token sera envoyé avec un cookie (token = xxx)
  * Les mots de passe doivent être hachés
- Utilisateur en ligne
  * L'utilisateur peut se connecter avec e-mail et mot de passe
  * Le mot de passe en texte brut sera comparé au mot de passe haché stocké
  * Une fois connecté, un token sera envoyé avec un cookie (token = xxx)
- Déconnexion de l'utilisateur
  * Un cookie sera envoyé pour définir le jeton = aucun
- Obtenir l'utilisateur
  * Route pour obtenir l'utilisateur actuellement connecté (via un jeton)
- Réinitialisation du mot de passe (mot de passe perdu)
  * L'utilisateur peut demander à réinitialiser le mot de passe
  * Un jeton haché sera envoyé par e-mail à l'adresse e-mail enregistrée de l'utilisateur
  * Une demande de mise peut être faite à l'url générée pour réinitialiser le mot de passe
  * Le jeton expirera après 10 minutes
- Mettre à jour les informations de l'utilisateur
  * Utilisateur authentifié uniquement
  * Route séparée pour mettre à jour le mot de passe
- Utilisateur CRUD
  * Administrateur uniquement


## Suggestions liées au code
- Scripts NPM pour les environnements de développement et de production
- Fichier de configuration pour les constantes importantes
- Utiliser des méthodes de contrôleur avec des descriptions/routes documentées
- Erreur de gestion du middleware
- Middleware d'authentification pour protéger les routes et définir les rôles des utilisateurs
- Validation à l'aide de Mongoose et aucune bibliothèque externe
- Utiliser async/wait (créer un middleware pour nettoyer les méthodes de contrôleur)
- Créer un semoir de base de données pour importer et détruire des données