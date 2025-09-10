"use client";

import { UpcomingFormation } from "@/types";
import { useState, useMemo } from "react";

interface UpcomingFormationsListProps {
  formations: UpcomingFormation[];
  showFilters?: boolean;
  maxDisplay?: number;
  title?: string;
  displayMode?: 'cards' | 'table';
}

export default function UpcomingFormationsList({ 
  formations, 
  showFilters = false, 
  maxDisplay,
  title = "Prochaines formations",
  displayMode = 'cards'
}: UpcomingFormationsListProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Filtrer les formations
  const filteredFormations = formations.filter(formation => {
    const countryMatch = selectedCountry === "all" || formation.country === selectedCountry;
    const typeMatch = selectedType === "all" || formation.type === selectedType;
    return countryMatch && typeMatch;
  });

  // Calculer la pagination
  const totalPages = Math.ceil(filteredFormations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // Formations à afficher pour la page actuelle
  const displayedFormations = useMemo(() => {
    if (maxDisplay) {
      return filteredFormations.slice(0, maxDisplay);
    }
    return filteredFormations.slice(startIndex, endIndex);
  }, [filteredFormations, startIndex, endIndex, maxDisplay]);

  // Réinitialiser la page quand les filtres changent
  const handleFilterChange = (filterType: 'country' | 'type', value: string) => {
    setCurrentPage(1);
    if (filterType === 'country') {
      setSelectedCountry(value);
    } else {
      setSelectedType(value);
    }
  };

  // Obtenir les pays uniques pour les filtres
  const countries = Array.from(new Set(formations.map(f => f.country)));
  
  // Formater la date
  const formatDate = (dateStr: string, endDateStr?: string) => {
    if (!dateStr) {
      return "Date à définir";
    }
    
    const date = new Date(dateStr);
    const endDate = endDateStr ? new Date(endDateStr) : null;
    
    if (endDate && endDate.getTime() !== date.getTime()) {
      const startOptions: Intl.DateTimeFormatOptions = { 
        day: 'numeric', 
        month: 'long'
      };
      
      const endOptions: Intl.DateTimeFormatOptions = { 
        day: 'numeric', 
        month: endDate.getMonth() !== date.getMonth() ? 'long' : undefined
      };
      
      return `Du ${date.toLocaleDateString('fr-FR', startOptions)} au ${endDate.toLocaleDateString('fr-FR', endOptions)}`;
    }
    
    const singleOptions: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long'
    };
    
    return `Le ${date.toLocaleDateString('fr-FR', singleOptions)}`;
  };

  // Obtenir l'icône du type de formation
  const getTypeIcon = (type: string) => {
    if (type === 'neuro') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
  };

  // Obtenir la couleur du badge selon le type
  const getTypeBadgeColor = (type: string) => {
    return type === 'neuro' 
      ? 'bg-blue-100 text-blue-800 border-blue-200' 
      : 'bg-green-100 text-green-800 border-green-200';
  };

  if (displayedFormations.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
          {title}
        </h2>
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m0 0l6 6m-6-6v12" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune formation programmée</h3>
          <p className="text-gray-500">Les prochaines dates seront bientôt annoncées.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
        {title}
      </h2>

      {/* Filtres */}
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <label htmlFor="country-filter" className="text-sm font-medium text-gray-700">
              Pays :
            </label>
            <select
              id="country-filter"
              value={selectedCountry}
              onChange={(e) => handleFilterChange('country', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-brandviolet focus:border-transparent"
            >
              <option value="all">Tous</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <label htmlFor="type-filter" className="text-sm font-medium text-gray-700">
              Type :
            </label>
            <select
              id="type-filter"
              value={selectedType}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-brandviolet focus:border-transparent"
            >
              <option value="all">Tous</option>
              <option value="neuro">Neuro</option>
              <option value="sport">Ischio</option>
            </select>
          </div>
        </div>
      )}

      {/* Informations de pagination */}
      {!maxDisplay && filteredFormations.length > itemsPerPage && (
        <div className="mb-4 text-center text-sm text-gray-600">
          Affichage de {startIndex + 1} à {Math.min(endIndex, filteredFormations.length)} sur {filteredFormations.length} formations
        </div>
      )}

      {/* Affichage des formations */}
      {displayMode === 'table' ? (
        /* Affichage en tableau */
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ville</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organisateur</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Inscription</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayedFormations.map((formation, index) => (
                <tr key={formation.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(formation.type)}`}>
                        {getTypeIcon(formation.type)}
                        <span className="ml-1">
                          {formation.type === 'neuro' ? 'Neuro' : 'Ischio'}
                        </span>
                      </div>
                      {formation.isSpecial && (
                        <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brandviolet to-purple-600 text-white">
                          {formation.specialLabel}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatDate(formation.date, formation.endDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{formation.city}</div>
                      <div className="text-gray-500">({formation.country})</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formation.organizer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {formation.link ? (
                      <a
                        href={formation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-brandviolet hover:bg-purple-600 transition-colors"
                      >
                        En savoir +
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 rounded-md">
                        Bientôt disponible
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Affichage en cartes (mode original) */
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedFormations.map((formation) => (
            <div
              key={formation.id}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Badge spécial pour MASTERCLASS */}
              {formation.isSpecial && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-brandviolet to-purple-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider transform rotate-12 translate-x-2 -translate-y-1 shadow-lg">
                  {formation.specialLabel}
                </div>
              )}

              {/* En-tête avec type et date */}
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeBadgeColor(formation.type)}`}>
                  {getTypeIcon(formation.type)}
                  <span className="ml-2 capitalize">
                    {formation.type === 'neuro' ? 'Neuro' : 'Ischio'}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-brandviolet">
                    {formatDate(formation.date, formation.endDate)}
                  </div>
                </div>
              </div>

              {/* Informations de lieu */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-brandviolet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold">{formation.city}</span>
                  <span className="text-gray-500 ml-1">({formation.country})</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-brandviolet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm">{formation.organizer}</span>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="mt-6">
                {formation.link ? (
                  <a
                    href={formation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-brandviolet text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200 text-sm"
                  >
                    En savoir +
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center bg-gray-300 text-gray-500 font-semibold py-2 px-4 rounded-lg cursor-not-allowed text-sm"
                  >
                    Inscription bientôt disponible
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contrôles de pagination */}
      {!maxDisplay && totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Précédent
          </button>
          
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-brandviolet text-white'
                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Suivant
          </button>
        </div>
      )}

      {/* Message si plus de formations disponibles (seulement si maxDisplay est utilisé) */}
      {maxDisplay && filteredFormations.length > maxDisplay && (
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            {filteredFormations.length - maxDisplay} autres formations disponibles
          </p>
          <a
            href="/formations"
            className="inline-flex items-center text-brandviolet hover:text-purple-600 font-semibold transition"
          >
            Voir toutes les formations
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}